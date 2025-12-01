export default function Button({ text, bgcolor, textcol, hover, type, link, onClick }) {
  const baseClass =
    `flex items-center justify-between gap-2 cursor-pointer font-medium
     text-[1rem] md:text-[1.2rem] px-6 py-4 md:px-6 md:py-4 lg:px-8 lg:py-4 
     rounded-full shadow-sm hover:shadow-md transition`;

  const style = {
    backgroundColor: `var(--color-${bgcolor})`,
    color: `var(--color-${textcol})`,
  };

  // CALL BUTTON
  if (type === "call") {
    return (
      <a href={`tel:${link}`} className={baseClass} style={style}>
        {text} → 
      </a>
    );
  }

  // APPOINTMENT BUTTON
  if (type === "appointment") {
    return (
      <button onClick={onClick} className={baseClass} style={style}>
        {text} →
      </button>
    );
  }

  return null;
}
