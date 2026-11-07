import Image from 'next/image'
import { BouncingFaces } from './bouncing-faces'

const band = Array.from({ length: 8 }, () => 'keronun projeleri')

export function SiteHeader() {
  return (
    <header className="flex min-h-svh flex-col px-3 pt-3 md:px-6 md:pt-6">
      <div className="relative isolate flex flex-1 flex-col justify-center gap-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-20 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:flex-row md:items-center md:justify-between md:rounded-[2.75rem] md:px-12">
        <BouncingFaces />
        <div className="relative z-10 max-w-4xl text-paper">
          <h1 className="flex items-center gap-2 font-display text-4xl font-bold leading-[0.9] tracking-tight md:gap-5 md:text-9xl">
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
              className="size-20 shrink-0 animate-[spin_3s_linear_infinite] drop-shadow-lg md:size-64"
              priority
            />
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/75 md:text-2xl">
            {'matematikden 10 alsamda en azından kodlama yapabiliyorum :D'}
          </p>
        </div>
      </div>

      <div className="mx-1 my-4 overflow-hidden rounded-full bg-accent py-3 text-accent-foreground shadow-[0_8px_32px_rgba(233,209,93,0.12)] md:mx-2">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap px-2 font-display text-xl font-bold tracking-tight md:text-3xl">
          {[...band, ...band].map((text, i) => (
            <span key={i} className="flex items-center gap-10">
              {text}
              <span className="size-2.5 rounded-full bg-ink/80" />
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
