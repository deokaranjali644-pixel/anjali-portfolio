export function Marquee({ items, duration = 45, className, itemClassName, testId }) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className ?? ""}`} data-testid={testId}>
      <div className="animate-marquee flex w-max items-center" style={{ animationDuration: `${duration}s` }}>
        {row.map((item, i) => (
          <span key={i} className={`flex items-center whitespace-nowrap ${itemClassName ?? ""}`}>
            {item}
            <span className="mx-5 text-[8px] text-blaze">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
