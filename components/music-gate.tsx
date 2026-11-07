'use client'

import { useEffect, useRef } from 'react'

const VIDEO_ID = 'iBnjYShAWns'
const START_EVENTS = ['pointerdown', 'keydown', 'touchstart', 'wheel'] as const

export function MusicGate() {
  const playerRef = useRef<HTMLIFrameElement>(null)
  const interactedRef = useRef(false)

  const startPlayback = () => {
    const player = playerRef.current?.contentWindow
    if (!player) return

    player.postMessage(
      JSON.stringify({ event: 'command', func: 'unMute', args: [] }),
      'https://www.youtube.com',
    )
    player.postMessage(
      JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
      'https://www.youtube.com',
    )
  }

  useEffect(() => {
    const start = () => {
      interactedRef.current = true
      startPlayback()
    }

    START_EVENTS.forEach((event) => window.addEventListener(event, start, { once: true, passive: true }))
    return () => START_EVENTS.forEach((event) => window.removeEventListener(event, start))
  }, [])

  return (
    <iframe
      ref={playerRef}
      title="Arka plan müziği"
      src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&loop=1&playlist=${VIDEO_ID}&controls=0&playsinline=1&enablejsapi=1`}
      allow="autoplay; encrypted-media"
      onLoad={() => {
        if (interactedRef.current) startPlayback()
      }}
      className="pointer-events-none fixed -left-[9999px] top-0 h-px w-px"
      aria-hidden="true"
      tabIndex={-1}
    />
  )
}
