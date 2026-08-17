export default function ChoiceButton({ choice, onSelect, variant = 'choice' }) {
  const isContinue = variant === 'continue'

  return (
    <button
      type="button"
      onClick={() => onSelect(choice)}
      className="w-full text-left transition-all duration-200 rounded-md"
      style={{
        fontFamily: 'var(--font-ui)',
        color: 'var(--text)',
        background: isContinue ? 'transparent' : 'var(--panel)',
        border: isContinue ? '1px solid transparent' : '1px solid var(--border)',
        padding: isContinue ? '10px 4px' : '14px 18px',
        textAlign: isContinue ? 'center' : 'left',
        fontStyle: isContinue ? 'italic' : 'normal',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent)'
        e.currentTarget.style.background = isContinue ? 'transparent' : 'rgba(216,167,167,0.08)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = isContinue ? 'transparent' : 'var(--border)'
        e.currentTarget.style.background = isContinue ? 'transparent' : 'var(--panel)'
      }}
    >
      {choice.text}
    </button>
  )
}
