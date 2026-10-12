import { compatibilite } from "../content";
import { Field, SlideHeader, pad } from "./common";

export default function Compatibilite({ slideNum }) {
  const { entreprise, intro, axes, conclusion } = compatibilite;
  let n = 0;
  return (
    <div className="slide-inner compat">
      <SlideHeader
        num={pad(slideNum)}
        kicker="Pourquoi moi"
        title={entreprise ? `Rayen Ameur × ${entreprise}` : ""}
        titlePh="Mon parcours & l'entreprise"
      />
      <Field as="p" className="compat-intro" value={intro} ph="Introduction…" />
      <div className="compat-grid">
        {axes.map((axe, i) => (
          <section key={i} className="compat-axe">
            <Field as="h3" className="compat-axe-title" value={axe.titre} ph="Axe" />
            {axe.cas.map((c, j) => (
              <article key={j} className="compat-card">
                <div className="compat-card-top">
                  <span className="compat-num">{pad(++n)}</span>
                  <Field as="h4" value={c.titre} ph="Cas d'usage" />
                </div>
                <Field as="p" value={c.texte} ph="Description…" />
              </article>
            ))}
          </section>
        ))}
      </div>
      <Field as="p" className="compat-conclusion" value={conclusion} ph="Conclusion / mot de la fin" />
    </div>
  );
}
