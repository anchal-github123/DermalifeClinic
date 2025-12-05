export default function Button({ text, bgcolor, textcol, hover, type, link, onClick }) {
  const baseClass =
     `
  flex items-center justify-between gap-2 cursor-pointer font-medium shadow:2xl 
  text-[0.9rem] sm:text[0.8rem] md:text-[1.2rem] px-5 py-3 md:px-6 md:py-4 lg:px-8 lg:py-4 
  rounded-full transition-all duration-300
  hover:scale-105 hover:shadow-lg hover:-translate-y-1 border-1
`;

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
