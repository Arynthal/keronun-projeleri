import Image from 'next/image'

const commits = [
  ['a3f9c1e', 'fix: artık çalışıyor (galiba)'],
  ['9b2e77d', 'wip'],
  ['71dd0c4', 'saat 3 oldu ama bitiricem'],
  ['4c1d0aa', 'bunu neden yaptım'],
  ['e81f3b2', 'ilk commit'],
] as const

export function SiteHeader() {
  return (
    <header className="flex min-h-svh flex-col">
      <div className="flex items-center justify-between border-b border-border px-4 py-2 text-xs text-muted-foreground md:px-6">
        <span>
          <span className="text-accent">{'kerem'}</span>
          {'@laptop:~/projeler'}
        </span>
        <span className="hidden md:inline">{'main · 3 değişiklik commitlenmedi'}</span>
        <span>{'03:47'}</span>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-12 px-4 py-16 text-black md:flex-row md:items-center md:justify-between md:px-6">
        <div className="max-w-4xl text-paper">
          <h1 className="text-5xl font-bold leading-none tracking-tight text-balance md:text-8xl">
            {'keronun'}
          </h1>
          <p className="mt-8 text-base text-muted-foreground md:text-lg">
            {'// matematikden 10 alsamda en azından kodlama yapabiliyorum :D'}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-pretty">
            {
              'Burada boş zamanlarımda ve bazen boş olmayan zamanlarımda yaptığım projeler var. Bazıları çalışıyor, bazıları çalıştığını iddia ediyor.'
            }
          </p>
        </div>

        <figure className="w-fit shrink-0 border border-border p-3 text-paper">
          <Image
            src="/images/awesome-face.gif"
            alt="Gülen sarı surat"
            width={160}
            height={160}
            unoptimized
            className="size-28 animate-[spin_3s_linear_infinite] md:size-40"
            priority
          />
          <figcaption className="mt-3 text-xs text-muted-foreground">{'awesome_face.gif · 12kb'}</figcaption>
        </figure>
      </div>

      <div className="border-t border-border px-4 py-6 text-xs md:px-6">
        <p className="mb-3 text-muted-foreground">
          <span className="text-accent">{'$'}</span> {'git log --oneline'}
        </p>
        <ul className="flex flex-col gap-1">
          {commits.map(([hash, msg]) => (
            <li key={hash}>
              <span className="text-accent">{hash}</span> {msg}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between bg-muted text-xs" aria-hidden="true">
        <div className="flex items-center">
          <span className="bg-accent px-3 py-1 font-bold text-accent-foreground">{'NORMAL'}</span>
          <span className="px-3 py-1 text-muted-foreground">{'site-header.tsx [+]'}</span>
        </div>
        <span className="px-3 py-1 text-muted-foreground">{'utf-8 · ln 3, col 47'}</span>
      </div>
    </header>
  )
}
