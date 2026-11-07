import Image from 'next/image'
import { BouncingFaces } from './bouncing-faces'

const band = Array.from({ length: 8 }, () => 'keronun projeleri')

export function SiteHeader() {
  return (
    <header className="flex min-h-svh flex-col">
      <div className="relative flex flex-1 flex-col justify-center gap-12 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-8">
        <BouncingFaces />
        <div className="relative z-10 max-w-4xl text-paper">
          <h1 className="flex items-center gap-2 font-display text-4xl font-bold leading-[0.9] tracking-tighter md:gap-5 md:text-9xl">
            <span className="flex flex-col whitespace-nowrap">
              <span>{'keronun'}</span>
              <span className="text-accent">{'projeleri'}</span>
            </span>
            <Image
              src="/images/awesome-face.gif"
              alt="Gülen sarı surat"
              width={256}
              height={256}
              unoptimized
              className="size-20 shrink-0 animate-[spin_3s_linear_infinite] md:size-64"
              priority
            />
          </h1>
          <p className="mt-8 text-lg md:text-xl">
            {'matematikden 10 alsamda en azından kodlama yapabiliyorum :D'}
          </p>
        </div>
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
