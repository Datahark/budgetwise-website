// A stylized decorative QR code placeholder rendered as an SVG grid.
// Deterministic pattern so it stays stable between renders.

const SIZE = 21

function isFinder(row: number, col: number) {
  const inBox = (r: number, c: number) =>
    r >= 0 && r < 7 && c >= 0 && c < 7
  // top-left, top-right, bottom-left finder patterns
  if (inBox(row, col)) return finderCell(row, col)
  if (inBox(row, col - (SIZE - 7))) return finderCell(row, col - (SIZE - 7))
  if (inBox(row - (SIZE - 7), col)) return finderCell(row - (SIZE - 7), col)
  return null
}

function finderCell(r: number, c: number) {
  const ring = r === 0 || r === 6 || c === 0 || c === 6
  const core = r >= 2 && r <= 4 && c >= 2 && c <= 4
  return ring || core
}

function pseudoRandom(row: number, col: number) {
  const v = Math.sin(row * 12.9898 + col * 78.233) * 43758.5453
  return v - Math.floor(v) > 0.55
}

export function QRCode({ className }: { className?: string }) {
  const cells: { row: number; col: number; on: boolean }[] = []
  for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
      const finder = isFinder(row, col)
      const on = finder !== null ? finder : pseudoRandom(row, col)
      cells.push({ row, col, on })
    }
  }

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className={className}
      role="img"
      aria-label="QR code to download BudgetWise"
      shapeRendering="crispEdges"
    >
      <rect width={SIZE} height={SIZE} fill="transparent" />
      {cells.map(
        ({ row, col, on }) =>
          on && (
            <rect
              key={`${row}-${col}`}
              x={col}
              y={row}
              width={1}
              height={1}
              rx={0.28}
              className="fill-foreground"
            />
          ),
      )}
    </svg>
  )
}
