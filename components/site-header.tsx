import Image from 'next/image'
import { BouncingFaces } from './bouncing-faces'

const band = Array.from({ length: 8 }, () => 'keronun projeleri')

export function SiteHeader() {
  return (
    <header className="flex min-h-svh flex-col">
      <div className="relative flex flex-1 flex-col justify-center gap-12 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-8">
        <BouncingFaces />
        <div className="relative z-10 max-w-4xl text-paper">
          <h1 className="font-display text-6xl font-bold leading-[0.9] tracking-tighter text-balance md:text-9xl">
            {'keronun '}
            <span className="text-accent">{'projeleri'}</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl">
            {'matematikden 10 alsamda en azından kodlama yapabiliyorum :D'}
          </p>
        </div>

        <Image
          src="/images/awesome-face.gif"
          alt="Gülen sarı surat"
          width={160}
          height={160}
          unoptimized
          className="size-28 shrink-0 animate-[spin_3s_linear_infinite] md:size-44"
          priority
        />
      </div>

      <div className="overflow-hidden bg-accent py-4 text-accent-foreground" aria-hidden="true">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl font-bold tracking-tight md:text-4xl">
          {[...band, ...band].map((text, i) => (
            <span key={i} className="flex items-center gap-10">
              {text}
              <span className="size-3 rounded-full bg-ink" />
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
