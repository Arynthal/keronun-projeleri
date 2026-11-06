import Image from 'next/image'

const tickerWords = ['Kod', 'Tasarım', 'Oyun', 'Bot', 'Araç', 'Deneme', 'Hata', 'Tekrar']

export function SiteHeader() {
  return (
    <header className="border-b border-ink">
      <div className="flex items-center justify-between border-b border-ink px-4 py-2 text-xs uppercase tracking-widest md:px-8">
        <span>{'Proje Arşivi'}</span>
        <span className="hidden md:inline">{'Sayı 01 — 2026'}</span>
        <a href="#projeler" className="underline underline-offset-4 hover:text-accent">
          {'Projelere git ↓'}
        </a>
      </div>

      <div className="grid gap-8 px-4 py-12 md:grid-cols-[1fr_auto] md:items-end md:px-8 md:py-20">
        <div>
          <p className="mb-4 text-sm text-muted-foreground">{'Merhaba, ben —'}</p>
          <h1 className="font-display text-6xl leading-[0.9] text-balance md:text-[9rem]">
          {'Keremin '}
          <em className="text-accent">{'Projeleri'}</em>
          </h1>
          <p className="mt-6 font-display text-2xl italic md:text-3xl">
            {'matematikden 10 alsamda en azından kodlama yapabiliyorum :D'}
          </p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-pretty">
            {
              'Burada boş zamanlarımda ve bazen boş olmayan zamanlarımda yaptığım projeler var. Bazıları çalışıyor, bazıları çalıştığını iddia ediyor.'
            }
          </p>
        </div>
        <Image
          src="/images/awesome-face.gif"
          alt="Gülen sarı surat"
          width={160}
          height={160}
          unoptimized
          className="size-28 -rotate-12 md:size-40"
          priority
        />
      </div>

      <div className="overflow-hidden border-t border-ink bg-ink py-2 text-paper" aria-hidden="true">
        <div className="animate-ticker flex w-max gap-8 whitespace-nowrap text-sm uppercase tracking-widest">
          {[...tickerWords, ...tickerWords, ...tickerWords, ...tickerWords].map((w, i) => (
            <span key={i} className="flex items-center gap-8">
              {w}
              <span className="text-accent">{'*'}</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
