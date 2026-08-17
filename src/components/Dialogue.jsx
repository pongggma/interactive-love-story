export default function Dialogue({ line, onAdvance, showHint }) {
  if (!line) return null

  const isNarration = !line.speaker

  return (
    <button
      type="button"
      onClick={onAdvance}
      className="w-full text-left cursor-pointer group"
      aria-label="ໄປຕໍ່"
    >
      {isNarration ? (
        <p
          key={line.text}
          className="dialogue-line-enter text-center italic mx-auto max-w-xl px-6 py-4"
          style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-accent)', fontSize: '1.15rem', lineHeight: 1.7 }}
        >
          {line.text}
        </p>
      ) : (
        <div
          key={line.text}
          className="dialogue-line-enter mx-auto max-w-xl rounded-lg px-6 py-5 backdrop-blur-sm"
          style={{ background: 'var(--panel)', border: '1px solid var(--border)' }}
        >
          <div
            className="mb-2 text-sm tracking-wide"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-ui)' }}
          >
            {line.speaker}
          </div>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', lineHeight: 1.6 }}>
            {line.text}
          </p>
        </div>
      )}
      {showHint && (
        <div
          className="text-center mt-3 text-xs opacity-0 group-hover:opacity-70 transition-opacity"
          style={{ color: 'var(--text-secondary)' }}
        >
          ແຕະເພື່ອໄປຕໍ່ ▼
        </div>
      )}
    </button>
  )
}
