import { useState } from "react";
import { profil } from "../content";
import { Field, asset } from "./common";

function Photo({ src, index }) {
  const [error, setError] = useState(!src);
  return (
    <figure className={`photo photo-${index + 1}`}>
      {error ? (
        <div className="photo-ph">{String(index + 1).padStart(2, "0")}</div>
      ) : (
        <img src={asset(src)} alt="" onError={() => setError(true)} />
      )}
    </figure>
  );
}

export default function Cover() {
  const photos = profil.photos.slice(0, 5);
  // Trois colonnes décalées : 2 photos / 1 grande / 2 photos
  const columns = [photos.slice(0, 2), photos.slice(2, 3), photos.slice(3, 5)];
  let n = 0;

  return (
    <div className="slide-inner cover">
      <div className="cover-text">
        <div className="kicker">
          <span className="kicker-num">01</span>
          <span className="kicker-line" />
          <span>Portfolio</span>
        </div>
        <h1 className="cover-name">
          <Field value={profil.prenom} ph="Prénom" />
          <Field className="upper" value={profil.nom} ph="Nom" />
        </h1>
        <span className="cover-rule" />
        <Field as="p" className="cover-title" value={profil.titre} ph="Titre / intitulé" />
      </div>
      <div className="cover-photos">
        {columns.map((col, c) => (
          <div key={c} className={`photo-col col-${c + 1}`}>
            {col.map((src) => {
              const i = n++;
              return <Photo key={i} src={src} index={i} />;
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
