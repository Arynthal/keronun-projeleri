'use client'

import { useEffect, useRef, type CSSProperties } from 'react'

const faces = [
  { size: 56, spin: 2 },
  { size: 80, spin: 4 },
  { size: 40, spin: 1.2 },
  { size: 64, spin: 3 },
  { size: 48, spin: 0 },
  { size: 72, spin: 5 },
]

const directions = [
  [1, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
] as const

export function BouncingFaces() {
  const fieldRef = useRef<HTMLDivElement>(null)
  const faceRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const field = fieldRef.current
    const nodes = faceRefs.current.slice(0, faces.length)
    if (!field || nodes.some((node) => !node)) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const particles = faces.map((face, i) => ({
      x: 0,
      y: 0,
      vx: directions[i][0] * (64 + (i % 3) * 22),
      vy: directions[i][1] * (48 + (i % 4) * 17),
      size: face.size,
      mass: face.size * face.size,
    }))

    let width = 0
    let height = 0
    let frame = 0
    let lastTime = 0

    const draw = () => {
      particles.forEach((particle, i) => {
        const node = nodes[i]
        if (node) {
          node.style.transform = `translate3d(${particle.x}px, ${particle.y}px, 0)`
          node.style.opacity = '1'
        }
      })
    }

    const resize = () => {
      width = field.clientWidth
      height = field.clientHeight
      const columns = Math.max(1, Math.min(3, Math.floor(width / 170)))
      const rows = Math.ceil(faces.length / columns)

      particles.forEach((particle, i) => {
        const column = i % columns
        const row = Math.floor(i / columns)
        particle.x = Math.max(0, Math.min(width - particle.size, ((column + 0.5) * width) / columns - particle.size / 2))
        particle.y = Math.max(0, Math.min(height - particle.size, ((row + 0.5) * height) / rows - particle.size / 2))
      })
      draw()
    }

    const observer = new ResizeObserver(resize)
    observer.observe(field)
    resize()

    const animate = (time: number) => {
      if (reducedMotion) return

      const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0
      lastTime = time

      particles.forEach((particle) => {
        particle.x += particle.vx * delta
        particle.y += particle.vy * delta

        if (particle.x <= 0 || particle.x >= width - particle.size) {
          particle.x = Math.max(0, Math.min(width - particle.size, particle.x))
          particle.vx *= -1
        }
        if (particle.y <= 0 || particle.y >= height - particle.size) {
          particle.y = Math.max(0, Math.min(height - particle.size, particle.y))
          particle.vy *= -1
        }
      })

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const first = particles[i]
          const second = particles[j]
          let dx = second.x + second.size / 2 - (first.x + first.size / 2)
          let dy = second.y + second.size / 2 - (first.y + first.size / 2)
          let distance = Math.hypot(dx, dy)
          const minDistance = (first.size + second.size) / 2

          if (distance >= minDistance) continue
          if (distance === 0) {
            dx = 1
            distance = 1
          }

          const nx = dx / distance
          const ny = dy / distance
          const overlap = minDistance - distance
          const totalMass = first.mass + second.mass

          first.x -= nx * overlap * (second.mass / totalMass)
          first.y -= ny * overlap * (second.mass / totalMass)
          second.x += nx * overlap * (first.mass / totalMass)
          second.y += ny * overlap * (first.mass / totalMass)

          const relativeVelocity = (second.vx - first.vx) * nx + (second.vy - first.vy) * ny
          if (relativeVelocity < 0) {
            const impulse = -(1 + 0.92) * relativeVelocity / (1 / first.mass + 1 / second.mass)
            first.vx -= (impulse / first.mass) * nx
            first.vy -= (impulse / first.mass) * ny
            second.vx += (impulse / second.mass) * nx
            second.vy += (impulse / second.mass) * ny
          }
        }
      }

      draw()
      frame = window.requestAnimationFrame(animate)
    }

    if (!reducedMotion) {
      frame = window.requestAnimationFrame(animate)
    }

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={fieldRef} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {faces.map((face, i) => (
        <div
          key={i}
          ref={(node) => {
            faceRefs.current[i] = node
          }}
          className="absolute left-0 top-0 opacity-0 will-change-transform"
        >
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
      ))}
    </div>
  )
}
