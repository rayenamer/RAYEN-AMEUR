import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { asset, pad } from "./common";

const MIN_K = 0.05;
const MAX_K = 12;
const PAN_STEP = 140;
const clamp = (v, a, b) => Math.min(Math.max(v, a), b);

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);
const I = {
  up: "M6 15l6-6 6 6",
  down: "M6 9l6 6 6-6",
  left: "M15 6l-6 6 6 6",
  right: "M9 6l6 6-6 6",
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
  fit: "M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5",
  close: "M6 6l12 12M18 6L6 18",
};

// Visionneuse de diagramme : molette = zoom sous le curseur, glisser = déplacer,
// pincer (tactile) = zoom, double-clic = recadrer.
function PanZoom({ src, alt }) {
  const box = useRef(null);
  const nat = useRef(null);
  const pointers = useRef(new Map());
  const pinch = useRef(null);
  const [t, setT] = useState({ x: 0, y: 0, k: 1 });
  const [ready, setReady] = useState(false);
  const [dragging, setDragging] = useState(false);

  const fit = useCallback(() => {
    const b = box.current, n = nat.current;
    if (!b || !n) return;
    const { width: cw, height: ch } = b.getBoundingClientRect();
    const k = Math.min(cw / n.w, ch / n.h) * 0.92;
    setT({ k, x: (cw - n.w * k) / 2, y: (ch - n.h * k) / 2 });
  }, []);

  const zoomAt = useCallback((factor, cx, cy) => {
    setT((p) => {
      const k = clamp(p.k * factor, MIN_K, MAX_K);
      const f = k / p.k;
      return { k, x: cx - (cx - p.x) * f, y: cy - (cy - p.y) * f };
    });
  }, []);

  const zoomCenter = useCallback((factor) => {
    const r = box.current.getBoundingClientRect();
    zoomAt(factor, r.width / 2, r.height / 2);
  }, [zoomAt]);

  const pan = useCallback((dx, dy) => setT((p) => ({ ...p, x: p.x + dx, y: p.y + dy })), []);

  const onLoad = (e) => {
    const img = e.currentTarget;
    nat.current = { w: img.naturalWidth || 1600, h: img.naturalHeight || 900 };
    fit();
    setReady(true);
  };

  // Molette (listener natif pour pouvoir bloquer le scroll de la page)
  useEffect(() => {
    const el = box.current;
    const onWheel = (e) => {
      e.preventDefault();
      const r = el.getBoundingClientRect();
      const speed = e.ctrlKey ? 0.01 : 0.0015; // pinch trackpad = ctrl + wheel
      zoomAt(Math.exp(-e.deltaY * speed), e.clientX - r.left, e.clientY - r.top);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [zoomAt]);

  useEffect(() => {
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [fit]);

  // Clavier : + / - / 0 / flèches
  useEffect(() => {
    const onKey = (e) => {
      const k = e.key;
      if (k === "+" || k === "=") zoomCenter(1.25);
      else if (k === "-" || k === "_") zoomCenter(0.8);
      else if (k === "0") fit();
      else if (k === "ArrowLeft") pan(PAN_STEP, 0);
      else if (k === "ArrowRight") pan(-PAN_STEP, 0);
      else if (k === "ArrowUp") pan(0, PAN_STEP);
      else if (k === "ArrowDown") pan(0, -PAN_STEP);
      else return;
      e.preventDefault();
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [fit, pan, zoomCenter]);

  const local = (e) => {
    const r = box.current.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const onPointerDown = (e) => {
    if (e.target.closest("button")) return;
    box.current.setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, local(e));
    setDragging(true);
    pinch.current = null;
  };

  const onPointerMove = (e) => {
    const ps = pointers.current;
    if (!ps.has(e.pointerId)) return;
    const prev = ps.get(e.pointerId);
    const cur = local(e);
    ps.set(e.pointerId, cur);
    if (ps.size === 1) {
      pan(cur.x - prev.x, cur.y - prev.y);
    } else if (ps.size === 2) {
      const [a, b] = [...ps.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      if (pinch.current) {
        pan(mid.x - pinch.current.mid.x, mid.y - pinch.current.mid.y);
        zoomAt(dist / pinch.current.dist, mid.x, mid.y);
      }
      pinch.current = { dist, mid };
    }
  };

  const onPointerUp = (e) => {
    pointers.current.delete(e.pointerId);
    pinch.current = null;
    if (pointers.current.size === 0) setDragging(false);
  };

  return (
    <div
      ref={box}
      className={`pz ${dragging ? "dragging" : ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onDoubleClick={(e) => !e.target.closest("button") && fit()}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        onLoad={onLoad}
        className="pz-img"
        style={{
          transform: `translate(${t.x}px, ${t.y}px) scale(${t.k})`,
          opacity: ready ? 1 : 0,
        }}
      />

      <div className="pz-hint">Molette : zoom · Glisser : déplacer · Double-clic : recadrer</div>

      <div className="pz-controls">
        <span className="pz-zoom">{Math.round(t.k * 100)} %</span>
        <div className="pz-pad">
          <button className="u" onClick={() => pan(0, PAN_STEP)} aria-label="Haut"><Icon d={I.up} /></button>
          <button className="l" onClick={() => pan(PAN_STEP, 0)} aria-label="Gauche"><Icon d={I.left} /></button>
          <button className="c" onClick={fit} aria-label="Recadrer"><Icon d={I.fit} /></button>
          <button className="r" onClick={() => pan(-PAN_STEP, 0)} aria-label="Droite"><Icon d={I.right} /></button>
          <button className="d" onClick={() => pan(0, -PAN_STEP)} aria-label="Bas"><Icon d={I.down} /></button>
        </div>
        <div className="pz-zoombtns">
          <button onClick={() => zoomCenter(1.25)} aria-label="Zoom avant"><Icon d={I.plus} /></button>
          <button onClick={() => zoomCenter(0.8)} aria-label="Zoom arrière"><Icon d={I.minus} /></button>
        </div>
      </div>
    </div>
  );
}

const embedUrl = (url) => {
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
  const drive = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
  if (drive) return `https://drive.google.com/file/d/${drive[1]}/preview`;
  return null;
};

function Video({ src, title }) {
  const embed = embedUrl(src);
  return (
    <div className="pm-video">
      {embed ? (
        <iframe src={embed} title={title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
      ) : (
        <video src={asset(src)} controls playsInline preload="metadata" />
      )}
    </div>
  );
}

const Empty = ({ children }) => <div className="pm-empty">{children}</div>;

export default function ProtoModal({ proto, index, onClose }) {
  const [tab, setTab] = useState(proto.diagramme || !proto.video ? "archi" : "demo");
  const closeBtn = useRef(null);

  useLayoutEffect(() => closeBtn.current?.focus(), []);

  // Capture sur window : la navigation des diapos ne reçoit pas les touches
  useEffect(() => {
    const onKey = (e) => {
      e.stopPropagation();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [onClose]);

  const stop = (e) => e.stopPropagation(); // pas de swipe de diapo depuis la modale

  return createPortal(
    <div className="pm-overlay" onClick={onClose} onTouchStart={stop} onTouchEnd={stop}>
      <div
        className="pm-panel"
        role="dialog"
        aria-modal="true"
        aria-label={proto.titre}
        onClick={stop}
      >
        <header className="pm-head">
          <div className="pm-titles">
            <span className="pm-kicker">
              <span className="pm-num">{pad(index + 1)}</span>
              <span className="pm-line" />
              Prototype
            </span>
            <h3>{proto.titre}</h3>
          </div>

          <div className="pm-tabs" role="tablist">
            <button role="tab" aria-selected={tab === "archi"} className={tab === "archi" ? "on" : ""} onClick={() => setTab("archi")}>
              Architecture
            </button>
            <button role="tab" aria-selected={tab === "demo"} className={tab === "demo" ? "on" : ""} onClick={() => setTab("demo")}>
              Démo vidéo
            </button>
          </div>

          <div className="pm-actions">
            {proto.lien && (
              <a className="pm-open" href={proto.lien} target="_blank" rel="noopener noreferrer">
                Ouvrir le prototype ↗
              </a>
            )}
            <button ref={closeBtn} className="pm-close" onClick={onClose} aria-label="Fermer">
              <Icon d={I.close} />
            </button>
          </div>
        </header>

        <div className="pm-body">
          {tab === "archi" ? (
            proto.diagramme ? (
              <PanZoom src={asset(proto.diagramme)} alt={`Architecture — ${proto.titre}`} />
            ) : (
              <Empty>Diagramme d’architecture à ajouter (champ « diagramme »)</Empty>
            )
          ) : proto.video ? (
            <Video src={proto.video} title={`Démo — ${proto.titre}`} />
          ) : (
            <Empty>Vidéo de démo à ajouter (champ « video »)</Empty>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
