import { useEffect, useState } from 'react'

// Re-triggers a CSS fade whenever `transitionKey` changes (e.g. a new scene id).
export default function FadeTransition({ transitionKey, children, className = '' }) {
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    setAnimKey((k) => k + 1)
  }, [transitionKey])

  return (
    <div key={animKey} className={`scene-fade-enter ${className}`}>
      {children}
    </div>
  )
}
