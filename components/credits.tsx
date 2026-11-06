import Image from 'next/image'

const credits = Array.from({ length: 9 }, () => ['Yapan', 'Ben'] as const)

export function Credits() {
  return (
    <footer aria-labelledby="jenerik" className="relative overflow-hidden bg-ink text-paper">
      <h2 id="jenerik" className="sr-only">
        {'Jenerik'}
      </h2>

      <div className="relative h-[70vh] overflow-hidden" aria-hidden="true">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-ink [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-ink [mask-image:linear-gradient(to_top,black,transparent)]" />
        <div className="animate-credits-roll mx-auto max-w-md pt-[30vh]">
          {[...credits, ...credits].map(([role, name], i) => (
            <div key={i} className="grid grid-cols-2 gap-6 py-3 text-center">
              <span className="text-right text-xs uppercase tracking-widest text-paper/50">{role}</span>
              <span className="text-left font-display text-2xl">{name}</span>
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-10 z-20">
          <div className="animate-face-cross w-fit">
            <Image
              src="/images/awesome-face.gif"
              alt=""
              width={120}
              height={120}
              unoptimized
              className="size-20 md:size-28"
            />
          </div>
        </div>
      </div>

      <p className="sr-only">{'Yapan: Ben'}</p>

      <div className="flex flex-col gap-2 border-t border-paper/20 px-4 py-6 text-xs uppercase tracking-widest text-paper/60 md:flex-row md:justify-between md:px-8">
        <span>{'Son.'}</span>
        <span>{'© 2026 — Tüm hakları saklı değil'}</span>
      </div>
    </footer>
  )
}
