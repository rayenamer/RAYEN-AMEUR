import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { experiences } from "./content";
import Cover from "./slides/Cover";
import Parcours from "./slides/Parcours";
import Statut from "./slides/Statut";
import Certificats from "./slides/Certificats";
import Experience from "./slides/Experience";
import Compatibilite from "./slides/Compatibilite";
import Prototypes from "./slides/Prototypes";
import { pad } from "./slides/common";

const STAGE_W = 1600;
const STAGE_H = 900;

const slides = [
  { key: "cover", dark: true, render: () => <Cover /> },
  { key: "parcours", render: () => <Parcours /> },
  { key: "certificats", render: () => <Certificats /> },
  { key: "statut", dark: true, render: () => <Statut /> },
  ...experiences.map((exp, i) => ({
    key: `exp-${i}`,
    render: () => (
      <Experience exp={exp} index={i} total={experiences.length} slideNum={5 + i} />
    ),
  })),
  { key: "compat", dark: true, render: () => <Compatibilite slideNum={5 + experiences.length} /> },
  { key: "prototypes", render: () => <Prototypes slideNum={6 + experiences.length} /> },
];

const fromHash = () => {
  const n = parseInt(window.location.hash.slice(1), 10);
  return Number.isNaN(n) ? 0 : Math.min(Math.max(n - 1, 0), slides.length - 1);
};

export default function App() {
  const [current, setCurrent] = useState(fromHash);
  const [scale, setScale] = useState(1);
  const touchX = useRef(null);

  const go = useCallback(
    (i) => setCurrent(Math.min(Math.max(i, 0), slides.length - 1)),
    []
  );

  useEffect(() => {
    window.history.replaceState(null, "", `#${current + 1}`);
  }, [current]);

  useLayoutEffect(() => {
    const fit = () =>
      setScale(Math.min(window.innerWidth / STAGE_W, window.innerHeight / STAGE_H));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        setCurrent((c) => Math.min(c + 1, slides.length - 1));
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        setCurrent((c) => Math.max(c - 1, 0));
      } else if (e.key === "Home") go(0);
      else if (e.key === "End") go(slides.length - 1);
      else if (e.key.toLowerCase() === "f") {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) go(current + (dx < 0 ? 1 : -1));
    touchX.current = null;
  };

  const dark = slides[current].dark;

  return (
    <div
      className={`viewport ${dark ? "is-dark" : "is-light"}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="stage"
        style={{ width: STAGE_W, height: STAGE_H, transform: `translate(-50%, -50%) scale(${scale})` }}
      >
        {slides.map((s, i) => (
          <section
            key={s.key}
            className={`slide ${s.dark ? "dark" : "light"} ${
              i === current ? "active" : i < current ? "before" : "after"
            }`}
            aria-hidden={i !== current}
          >
            {s.render()}
          </section>
        ))}
      </div>

      <nav className="controls">
        <button onClick={() => go(current - 1)} disabled={current === 0} aria-label="Précédent">
          ←
        </button>
        <div className="dots">
          {slides.map((s, i) => (
            <button
              key={s.key}
              className={`dot-btn ${i === current ? "on" : ""}`}
              onClick={() => go(i)}
              aria-label={`Diapo ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => go(current + 1)}
          disabled={current === slides.length - 1}
          aria-label="Suivant"
        >
          →
        </button>
        <span className="counter">
          {pad(current + 1)} / {pad(slides.length)}
        </span>
      </nav>
      <div className="progress" style={{ width: `${((current + 1) / slides.length) * 100}%` }} />
    </div>
  );
}
