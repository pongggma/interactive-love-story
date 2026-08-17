import { ACTS } from '../data/story'

export default function ProgressBar({ act }) {
  const current = ACTS[act]
  const actNumbers = Object.keys(ACTS).map(Number)

  return (
    <div className="flex flex-col items-center gap-1.5 select-none">
      <div className="flex items-center gap-2">
        {actNumbers.map((num) => (
          <span
            key={num}
            className="rounded-full transition-all duration-500"
            style={{
              width: num === act ? '18px' : '6px',
              height: '6px',
              background: num <= act ? 'var(--accent)' : 'rgba(245,245,245,0.18)',
            }}
          />
        ))}
      </div>
      {current && (
        <div
          className="text-[11px] tracking-[0.15em] uppercase"
          style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-ui)' }}
        >
          {current.label} · {current.title}
        </div>
      )}
    </div>
  )
}
