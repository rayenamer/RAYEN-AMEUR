import { useState } from "react";
import { certificats } from "../content";
import { Field, SlideHeader, asset, pad } from "./common";

function Logo({ src, index }) {
  const [error, setError] = useState(!src);
  return (
    <div className="certif-logo">
      {error ? (
        <span className="certif-logo-ph">Logo {pad(index + 1)}</span>
      ) : (
        <img src={asset(src)} alt="" onError={() => setError(true)} />
      )}
    </div>
  );
}

export default function Certificats() {
  return (
    <div className="slide-inner">
      <SlideHeader num="03" kicker="Certifications" title="Certificats professionnels" />
      <div className="certif-grid">
        {certificats.map((c, i) => (
          <article key={i} className="certif-card">
            <Logo src={c.logo} index={i} />
            <Field as="h3" className="certif-nom" value={c.nom} ph="Nom du certificat" />
            <Field as="p" className="certif-org" value={c.organisme} ph="Organisme" />
            <Field as="p" className="certif-date" value={c.date} ph="Date" />
            {c.lien ? (
              <a className="certif-link" href={c.lien} target="_blank" rel="noopener noreferrer">
                Voir le certificat ↗
              </a>
            ) : (
              <span className="certif-link ph">Lien à ajouter</span>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
//run ci run 