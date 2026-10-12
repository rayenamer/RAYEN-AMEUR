import { prototypes } from "../content";
import { Field, SlideHeader, pad } from "./common";

export default function Prototypes({ slideNum }) {
  return (
    <div className="slide-inner">
      <SlideHeader num={pad(slideNum)} kicker="Démonstrations" title="Prototypes" />
      <div className="proto-list">
        {prototypes.map((p, i) => {
          const Tag = p.lien ? "a" : "div";
          const linkProps = p.lien ? { href: p.lien, target: "_blank", rel: "noopener noreferrer" } : {};
          return (
            <Tag key={i} className="proto-card" {...linkProps}>
              <span className="proto-num">{pad(i + 1)}</span>
              <Field as="h3" value={p.titre} ph="Prototype" />
              {p.lien ? (
                <span className="proto-link">Ouvrir le prototype ↗</span>
              ) : (
                <span className="proto-link ph">Lien à ajouter</span>
              )}
            </Tag>
          );
        })}
      </div>
    </div>
  );
}
