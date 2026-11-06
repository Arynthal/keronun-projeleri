'use client'

import { useState } from 'react'

const VIDEO_ID = 'iBnjYShAWns'

export function MusicGate() {
  const [entered, setEntered] = useState(false)

  return (
    <>
      {!entered && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-ink px-6 text-paper">
          <p className="text-xs uppercase tracking-[0.3em] text-paper/60">
            {'Sesi açman önerilir'}
          </p>
          <button
            type="button"
            onClick={() => setEntered(true)}
            className="border border-paper px-8 py-4 font-display text-4xl italic transition-colors hover:bg-paper hover:text-ink focus-visible:bg-paper focus-visible:text-ink md:text-6xl"
          >
            {'İçeri gir →'}
          </button>
        </div>
      )}

      {entered && (
        <iframe
          title="Arka plan müziği"
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&loop=1&playlist=${VIDEO_ID}&controls=0`}
          allow="autoplay; encrypted-media"
          className="pointer-events-none fixed -left-[9999px] top-0 h-px w-px"
          aria-hidden="true"
          tabIndex={-1}
        />
      )}
    </>
  )
}
