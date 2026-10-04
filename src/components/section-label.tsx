export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label eyebrow">
      <span className="section-number">{number} /</span>
      <span>{children}</span>
    </div>
  );
}
