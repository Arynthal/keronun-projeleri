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
    <main className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 py-16 text-center">
      <BouncingFaces />

      <Link href="/" className="relative z-10 mb-12 self-start text-sm text-muted-foreground hover:text-paper">
        ← Projelerime dön
      </Link>

      <div className="relative z-10 flex flex-col items-center gap-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
          2026 · Oyun
        </p>
        <h1 className="font-display text-6xl font-bold tracking-tighter md:text-9xl">
          L.I.M.B.O
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          çakma korku oyunu işte :d
        </p>
        <a
          href={DOWNLOAD_URL}
          className="mt-4 inline-flex items-center justify-center bg-accent px-10 py-5 font-display text-xl font-bold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-paper"
        >
          İndirmek için tıkla
        </a>
      </div>
    </main>
  )
}
