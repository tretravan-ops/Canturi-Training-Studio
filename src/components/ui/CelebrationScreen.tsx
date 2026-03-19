'use client'

import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

interface Props {
  traineeName: string
  taskTitle: string
  onContinue: () => void
}

export function CelebrationScreen({ traineeName, taskTitle, onContinue }: Props) {
  const hasFiredRef = useRef(false)

  useEffect(() => {
    if (hasFiredRef.current) return
    hasFiredRef.current = true

    // Brand-colour confetti
    const colours = ['#C9A96E', '#FAF8F4', '#ffffff', '#8B6355', '#7B6B9A', '#6B8C6B', '#9A6B70']

    const fire = (particleRatio: number, opts: confetti.Options) => {
      confetti({
        origin: { y: 0.6 },
        colors: colours,
        ...opts,
        particleCount: Math.floor(200 * particleRatio),
      })
    }

    fire(0.25, { spread: 26, startVelocity: 55 })
    fire(0.2, { spread: 60 })
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 })
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 })
    fire(0.1, { spread: 120, startVelocity: 45 })
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-charcoal px-6 text-center">
      {/* Gem icon */}
      <div className="mb-6 text-6xl animate-bounce">◇</div>

      {/* Headline */}
      <h1 className="font-serif text-4xl text-gold mb-3 leading-tight">
        Beautifully done.
      </h1>

      {/* Trainee name */}
      <p className="text-white/60 text-lg mb-2">{traineeName}</p>

      {/* Task name */}
      <p className="text-white font-medium text-xl mb-10 max-w-xs leading-snug">
        {taskTitle}
      </p>

      {/* Divider */}
      <div className="w-10 h-px bg-gold/40 mb-10" />

      <button
        onClick={onContinue}
        className="border border-gold/40 text-gold px-8 py-3 rounded-lg hover:bg-gold/10 transition-colors text-sm tracking-widest uppercase"
      >
        Continue
      </button>
    </div>
  )
}
