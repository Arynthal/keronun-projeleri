import { projects } from '@/lib/projects'

export function ProjectList() {
  return (
    <section id="projeler" aria-labelledby="projeler-baslik" className="px-4 py-16 md:px-8">
      <div className="mb-10 flex items-baseline justify-between gap-4">
        <h2 id="projeler-baslik" className="font-display text-5xl md:text-7xl">
          {'Projeler'}
        </h2>
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          {`Toplam: ${projects.length.toString().padStart(2, '0')}`}
        </span>
      </div>

      <div className="hidden grid-cols-[4rem_1fr_6rem_6rem] border-b border-ink pb-2 text-xs uppercase tracking-widest text-muted-foreground md:grid">
        <span>{'No'}</span>
        <span>{'Proje'}</span>
        <span>{'Tür'}</span>
        <span className="text-right">{'Yıl'}</span>
      </div>

      <ol>
        {projects.map((p, i) => (
          <li key={p.title} className="border-b border-ink">
            <details className="group">
              <summary className="grid cursor-pointer list-none grid-cols-[3rem_1fr_auto] items-baseline gap-2 py-5 transition-colors hover:bg-ink hover:text-paper md:grid-cols-[4rem_1fr_6rem_6rem] md:px-0 [&::-webkit-details-marker]:hidden">
                <span className="text-sm text-muted-foreground group-hover:text-paper/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-3xl md:text-5xl">
                  {p.title}
                  <span className="ml-3 inline-block text-base transition-transform group-open:rotate-45">
                    {'+'}
                  </span>
                </span>
                <span className="hidden text-sm uppercase md:inline">{p.kind}</span>
                <span className="text-right text-sm">{p.year}</span>
              </summary>
              <div className="grid gap-4 pb-8 md:grid-cols-[4rem_1fr_12rem]">
                <span aria-hidden="true" />
                <p className="max-w-2xl text-sm leading-relaxed text-pretty">{p.description}</p>
                <ul className="flex flex-wrap gap-2 md:justify-end">
                  {p.stack.map((s) => (
                    <li key={s} className="border border-ink px-2 py-1 text-xs">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </li>
        ))}
      </ol>
    </section>
  )
}
