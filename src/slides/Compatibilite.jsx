import { compatibilite } from "../content";
import { Field, SlideHeader, pad } from "./common";

export default function Compatibilite({ slideNum }) {
  const { entreprise, intro, points, conclusion } = compatibilite;
  return (
    <div className="slide-inner">
      <SlideHeader
        num={pad(slideNum)}
        kicker="Pourquoi moi"
        title={entreprise ? `Mon parcours & ${entreprise}` : ""}
        titlePh="Mon parcours & l'entreprise"
      />
      <Field as="p" className="compat-intro" value={intro} ph="Introduction…" />
      <div className="compat-grid">
        {points.map((p, i) => (
          <article key={i} className="compat-card">
            <span className="compat-num">{pad(i + 1)}</span>
            <Field as="h3" value={p.titre} ph="Point fort" />
            <Field as="p" value={p.texte} ph="En quoi cela correspond à l'entreprise…" />
          </article>
        ))}
      </div>
      <Field as="p" className="compat-conclusion" value={conclusion} ph="Conclusion / mot de la fin" />
    </div>
  );
}
