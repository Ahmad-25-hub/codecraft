export function SectionLabel({
  number,
  children,
}: {
  number?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label eyebrow">
      {number ? <span className="section-number">{number} /</span> : null}
      <span>{children}</span>
    </div>
  );
}
