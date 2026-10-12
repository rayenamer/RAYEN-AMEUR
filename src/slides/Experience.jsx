import { Field, SlideHeader, pad } from "./common";

export default function Experience({ exp, index, total, slideNum }) {
  return (
    <div className="slide-inner">
      <SlideHeader
        num={pad(slideNum)}
        kicker={`Expérience ${pad(index + 1)} / ${pad(total)}`}
        title={exp.titre}
        titlePh="Titre de l'expérience"
      />
      <p className="exp-meta">
        <Field value={exp.entreprise} ph="Entreprise" />
        <span className="dot">•</span>
        <Field value={exp.periode} ph="Période" />
      </p>
      <Field as="p" className="exp-context" value={exp.contexte} ph="Contexte de la mission…" />

      <div className="exp-grid">
        <section>
          <h3 className="cv-label">Tâches</h3>
          <ol className="tasks">
            {exp.taches.map((t, i) => (
              <li key={i}>
                <span className="task-num">{pad(i + 1)}</span>
                <Field value={t} ph="Tâche réalisée" />
              </li>
            ))}
          </ol>
        </section>
        <section>
          <h3 className="cv-label">Technologies</h3>
          <ul className="techs">
            {exp.techs.map((t, i) => (
              <li key={i} className="tech">
                <Field className="tech-name" value={t.nom} ph="Technologie" />
                <Field className="tech-detail" value={t.detail} ph="Utilisation / détail" />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
