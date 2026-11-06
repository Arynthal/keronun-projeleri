'use client'

import { useState } from 'react'

const VIDEO_ID = 'iBnjYShAWns'

export function MusicGate() {
  const [entered, setEntered] = useState(false)

  return (
    <>
      {!entered && (
        <div className="fixed inset-0 z-50 flex flex-col items-start justify-center gap-6 bg-ink px-6 text-paper md:px-24">
          <p className="text-sm text-muted-foreground">{'// sesi açman önerilir'}</p>
          <button
            type="button"
            onClick={() => setEntered(true)}
            className="group text-2xl font-bold md:text-5xl"
          >
            <span className="text-accent">{'$ '}</span>
            <span className="underline-offset-8 group-hover:underline group-focus-visible:underline">{'./içeri-gir.sh'}</span>
            <span className="animate-blink ml-2 inline-block h-[0.8em] w-[0.5em] translate-y-[0.08em] bg-accent" aria-hidden="true" />
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
