export default function MusicPlayer({ muted, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={muted ? 'ເປີດສຽງ' : 'ປິດສຽງ'}
      className="fixed bottom-4 right-4 z-20 flex items-center gap-2 rounded-full px-3 py-2 backdrop-blur-sm transition-colors"
      style={{
        background: 'rgba(11,11,15,0.55)',
        border: '1px solid var(--border)',
        color: muted ? 'var(--text-secondary)' : 'var(--accent)',
      }}
    >
      <span style={{ fontSize: '0.95rem' }}>{muted ? '🔇' : '🎵'}</span>
    </button>
  )
}
