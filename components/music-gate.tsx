'use client'

import { useEffect, useState } from 'react'

const VIDEO_ID = 'iBnjYShAWns'
const START_EVENTS = ['pointerdown', 'keydown', 'touchstart', 'wheel'] as const

export function MusicGate() {
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (playing) return
    const start = () => setPlaying(true)
    START_EVENTS.forEach((event) => window.addEventListener(event, start, { once: true, passive: true }))
    return () => START_EVENTS.forEach((event) => window.removeEventListener(event, start))
  }, [playing])

  if (!playing) return null

  return (
    <iframe
      title="Arka plan müziği"
      src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&loop=1&playlist=${VIDEO_ID}&controls=0`}
      allow="autoplay; encrypted-media"
      className="pointer-events-none fixed -left-[9999px] top-0 h-px w-px"
      aria-hidden="true"
      tabIndex={-1}
    />
  )
}
