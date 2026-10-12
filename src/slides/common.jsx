// Affiche la valeur, ou un repère grisé si elle est vide
export function Field({ value, ph, as: Tag = "span", className = "" }) {
  const empty = !value || !String(value).trim();
  return (
    <Tag className={`${className}${empty ? " ph" : ""}`.trim()}>
      {empty ? ph : value}
    </Tag>
  );
}

export function SlideHeader({ num, kicker, title, titlePh }) {
  return (
    <header className="slide-header">
      <div className="kicker">
        <span className="kicker-num">{num}</span>
        <span className="kicker-line" />
        <span>{kicker}</span>
      </div>
      <Field as="h2" className="slide-title" value={title} ph={titlePh} />
    </header>
  );
}

export const pad = (n) => String(n).padStart(2, "0");
