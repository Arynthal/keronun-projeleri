import type { CSSProperties } from 'react'

const faces = [
  { size: 56, durX: 7, durY: 5, delay: -1, spin: 2 },
  { size: 80, durX: 11, durY: 6.5, delay: -4, spin: 4 },
  { size: 40, durX: 5.5, durY: 4, delay: -2, spin: 1.2 },
  { size: 64, durX: 9, durY: 7.5, delay: -6, spin: 3 },
  { size: 48, durX: 6.5, durY: 3.5, delay: -3, spin: 0 },
  { size: 72, durX: 13, durY: 8, delay: -8, spin: 5 },
]

export function BouncingFaces() {
  return (
    <div className="bounce-field pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {faces.map((face, i) => (
        <div
          key={i}
          className="bounce-x absolute top-0 left-0"
          style={
            {
              '--face-size': `${face.size}px`,
              '--dur-x': `${face.durX}s`,
              '--dur-y': `${face.durY}s`,
              '--delay': `${face.delay}s`,
            } as CSSProperties
          }
        >
          <div className="bounce-y">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/awesome-face.gif"
              alt=""
              width={face.size}
              height={face.size}
              className={face.spin ? 'motion-safe:animate-[spin_var(--spin)_linear_infinite]' : undefined}
              style={{ width: face.size, height: face.size, '--spin': `${face.spin}s` } as CSSProperties}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
