export function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={`arrow ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16M13 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}
export function Mark() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m8 5-6 7 6 7m8-14 6 7-6 7M14 4l-4 16"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}
