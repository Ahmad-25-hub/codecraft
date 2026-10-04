// A mathematical line form. No canvas, WebGL, textures, or image downloads.
function ringPath(index: number, total: number) {
  const phi = (index / total) * Math.PI * 2;
  const points: string[] = [];
  for (let j = 0; j <= 100; j++) {
    const theta = (j / 100) * Math.PI * 2;
    const radius = 124 + 56 * Math.cos(theta);
    const x = radius * Math.cos(phi);
    const y = radius * Math.sin(phi);
    const z = 56 * Math.sin(theta);
    const turn = 0.68;
    const tilt = -0.58;
    const rx = x * Math.cos(turn) + z * Math.sin(turn);
    const rz = -x * Math.sin(turn) + z * Math.cos(turn);
    const ry = y * Math.cos(tilt) - rz * Math.sin(tilt);
    points.push(
      `${j === 0 ? "M" : "L"}${(rx + 220).toFixed(2)},${(ry + 220).toFixed(2)}`,
    );
  }
  return points.join(" ");
}

export function DigitalForm() {
  return (
    <div className="digital-form" aria-hidden="true">
      <div className="form-inner">
        <svg viewBox="0 0 440 440" fill="none">
          {Array.from({ length: 64 }, (_, index) => (
            <path
              key={index}
              d={ringPath(index, 64)}
              stroke={index === 46 ? "#A855F7" : "#C7C6C4"}
              strokeWidth={index === 46 ? 1.2 : 0.65}
              opacity={
                index === 46
                  ? 0.85
                  : 0.16 + Math.abs(Math.sin(index * 0.13)) * 0.54
              }
            />
          ))}
        </svg>
      </div>
      <div className="form-caption">
        <span className="form-cross">+</span>
        <span>FORM / FUNCTION</span>
        <span>001</span>
      </div>
    </div>
  );
}
