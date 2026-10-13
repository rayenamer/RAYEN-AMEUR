import { useCallback, useState } from "react";
import { prototypes } from "../content";
import { Field, SlideHeader, pad } from "./common";
import ProtoModal from "./ProtoModal";

export default function Prototypes({ slideNum }) {
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <div className="slide-inner">
      <SlideHeader num={pad(slideNum)} kicker="Démonstrations" title="Prototypes" />
      <div className="proto-list">
        {prototypes.map((p, i) => {
          const tags = [p.diagramme && "Architecture", p.video && "Démo vidéo"].filter(Boolean);
          return (
            <button key={i} type="button" className="proto-card" onClick={() => setOpen(i)}>
              <span className="proto-num">{pad(i + 1)}</span>
              <Field as="h3" value={p.titre} ph="Prototype" />
              {tags.length > 0 && (
                <span className="proto-tags">
                  {tags.map((t) => <span key={t}>{t}</span>)}
                </span>
              )}
              <span className="proto-link">
                Voir le projet <span className="proto-arrow">→</span>
              </span>
            </button>
          );
        })}
      </div>
      {open != null && <ProtoModal proto={prototypes[open]} index={open} onClose={close} />}
    </div>
  );
}
