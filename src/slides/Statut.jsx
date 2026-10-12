import { statut } from "../content";
import { Field } from "./common";

function Diplome({ num, data, alternance }) {
  return (
    <article className={`diplome${alternance ? " alt" : ""}`}>
      <div className="diplome-top">
        <span className="diplome-num">Diplôme {num}</span>
        {alternance && <span className="badge">En alternance</span>}
      </div>
      <Field as="h3" className="diplome-title" value={data.intitule} ph="Intitulé du diplôme" />
      <dl className="diplome-infos">
        <div>
          <dt>École</dt>
          <Field as="dd" value={data.ecole} ph="—" />
        </div>
        <div>
          <dt>Période</dt>
          <Field as="dd" value={data.periode} ph="—" />
        </div>
        {alternance && (
          <div>
            <dt>Rythme</dt>
            <Field as="dd" value={data.rythme} ph="—" />
          </div>
        )}
      </dl>
    </article>
  );
}

export default function Statut() {
  return (
    <div className="slide-inner statut">
      <div className="statut-left">
        <div className="kicker">
          <span className="kicker-num">04</span>
          <span className="kicker-line" />
          <span>Aujourd'hui</span>
        </div>
        <p className="statut-eyebrow">Étudiant · Double diplôme</p>
        <Field as="h2" className="statut-poste" value={statut.accroche} ph="Votre accroche" />
        <Field as="p" className="statut-desc" value={statut.description} ph="Quelques lignes sur votre situation actuelle…" />
      </div>
      <div className="statut-right">
        <Diplome num={1} data={statut.diplome1} />
        <span className="diplome-plus">+</span>
        <Diplome num={2} data={statut.diplome2} alternance />
      </div>
    </div>
  );
}
