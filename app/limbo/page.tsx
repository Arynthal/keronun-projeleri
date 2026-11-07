import Link from 'next/link'
import type { Metadata } from 'next'
import { BouncingFaces } from '@/components/bouncing-faces'

export const metadata: Metadata = {
  title: 'L.I.M.B.O — Keronun Projeleri',
}

const DOWNLOAD_URL =
  'https://github.com/Arynthal/keronun-projeleri/releases/latest/download/LIMBO.exe'

export default function LimboPage() {
  return (
    <main className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 py-10 text-center md:py-16">
      <BouncingFaces />

      <Link
        href="/"
        className="relative z-10 mb-8 self-start rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-muted-foreground backdrop-blur-xl transition hover:bg-white/[0.09] hover:text-paper md:mb-12"
      >
        ← Projelerime dön
      </Link>

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-6 rounded-[2rem] border border-white/10 bg-[#111a2a]/85 p-8 shadow-[0_28px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:rounded-[2.5rem] md:p-14">
        <p className="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          2026 · Oyun
        </p>
        <h1 className="font-display text-5xl font-bold tracking-tight md:text-8xl">
          L.I.M.B.O
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          çakma korku oyunu işte :d
        </p>
        <a
          href={DOWNLOAD_URL}
          className="mt-3 inline-flex items-center justify-center rounded-2xl bg-accent px-9 py-4 font-display text-lg font-bold text-accent-foreground shadow-[0_10px_30px_rgba(233,209,93,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f4e69a] hover:shadow-[0_16px_38px_rgba(233,209,93,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Oyunu indir
        </a>
      </div>
    </main>
  )
}
