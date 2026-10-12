import { parcours } from "../content";
import { Field, SlideHeader } from "./common";

function Timeline({ label, items, mainKey, mainPh, subKey, subPh, className = "" }) {
  return (
    <section className="cv-col">
      <h3 className="cv-label">{label}</h3>
      <ul className={`timeline ${className}`.trim()}>
        {items.map((item, i) => (
          <li key={i}>
            <Field className="tl-date" value={item.periode} ph="Période" />
            <Field className="tl-main" value={item[mainKey]} ph={mainPh} />
            <Field className="tl-sub" value={item[subKey]} ph={subPh} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function Chips({ label, items, ph }) {
  return (
    <div className="cv-chips">
      <h3 className="cv-label">{label}</h3>
      <div className="chips">
        {items.map((c, i) => (
          <Field key={i} className="chip" value={c} ph={ph} />
        ))}
      </div>
    </div>
  );
}

export default function Parcours() {
  return (
    <div className="slide-inner">
      <SlideHeader num="02" kicker="Parcours" title="Mon parcours en bref" />
      <div className="cv-grid">
        <Timeline
          label="Formation"
          items={parcours.formations}
          mainKey="diplome"
          mainPh="Diplôme"
          subKey="etablissement"
          subPh="Établissement"
        />
        <Timeline
          label="Expériences"
          items={parcours.experiences}
          mainKey="poste"
          mainPh="Poste"
          subKey="entreprise"
          subPh="Entreprise"
          className="two-cols"
        />
      </div>
      <div className="cv-bottom">
        <Chips label="Compétences" items={parcours.competences} ph="Compétence" />
        <Chips label="Langues" items={parcours.langues} ph="Langue" />
      </div>
    </div>
  );
}
