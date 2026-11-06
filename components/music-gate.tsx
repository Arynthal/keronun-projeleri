'use client'

import { useRef, useState } from 'react'

const VIDEO_ID = 'iBnjYShAWns'

export function MusicGate() {
  const [entered, setEntered] = useState(false)
  const [playing, setPlaying] = useState(false)
  const frameRef = useRef<HTMLIFrameElement>(null)

  function send(func: 'playVideo' | 'pauseVideo') {
    frameRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args: [] }),
      '*',
    )
  }

  function enter() {
    setEntered(true)
    setPlaying(true)
  }

  function toggle() {
    send(playing ? 'pauseVideo' : 'playVideo')
    setPlaying(!playing)
  }

  return (
    <>
      {!entered && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-ink px-6 text-paper">
          <p className="text-xs uppercase tracking-[0.3em] text-paper/60">
            {'Sesi açman önerilir'}
          </p>
          <button
            type="button"
            onClick={enter}
            className="border border-paper px-8 py-4 font-display text-4xl italic transition-colors hover:bg-paper hover:text-ink focus-visible:bg-paper focus-visible:text-ink md:text-6xl"
          >
            {'İçeri gir →'}
          </button>
        </div>
      )}

      {entered && (
        <>
          <iframe
            ref={frameRef}
            title="Arka plan müziği"
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&loop=1&playlist=${VIDEO_ID}&controls=0&enablejsapi=1`}
            allow="autoplay; encrypted-media"
            className="pointer-events-none fixed -left-[9999px] top-0 h-px w-px"
            aria-hidden="true"
            tabIndex={-1}
          />
          <button
            type="button"
            onClick={toggle}
            aria-pressed={playing}
            className="fixed bottom-4 right-4 z-40 flex items-center gap-2 border border-ink bg-paper px-3 py-2 text-xs uppercase tracking-widest shadow-[4px_4px_0_0_var(--ink)] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_var(--ink)]"
          >
            <span
              className={`inline-block size-2 ${playing ? 'bg-accent' : 'bg-muted-foreground'}`}
              aria-hidden="true"
            />
            {playing ? 'Müzik: açık' : 'Müzik: kapalı'}
          </button>
        </>
      )}
    </>
  )
}
