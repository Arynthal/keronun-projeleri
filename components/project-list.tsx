import Link from 'next/link'
import { projects } from '@/lib/projects'

export function ProjectList() {
  return (
    <section id="projeler" aria-labelledby="projeler-baslik" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mb-8 flex items-center justify-between gap-6 px-1">
        <h2 id="projeler-baslik" className="font-display text-4xl font-bold leading-none tracking-tight md:text-7xl">
          {'Projelerim'}
        </h2>
        <span className="rounded-full border border-accent/20 bg-accent/10 px-5 py-2 font-display text-2xl font-bold text-accent md:px-6 md:py-3 md:text-4xl">
          {String(projects.length).padStart(2, '0')}
        </span>
      </div>

      <ol className="space-y-4">
        {projects.map((project, i) => {
          const card = (
            <article className="flex flex-col gap-5 px-5 py-6 transition-colors md:flex-row md:items-start md:gap-8 md:px-8 md:py-8">
              <span className="font-display text-xl font-bold text-accent md:w-12 md:pt-1 md:text-2xl">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold tracking-tight md:text-4xl">{project.title}</h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
                  {project.description}
                </p>
                {project.link === '/limbo' && (
                  <p className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-accent">
                    İndirmek için tıkla →
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2 md:w-56 md:flex-col md:items-end">
                <span className="text-sm font-semibold text-paper/90">
                  {project.kind} {'· '} {project.year}
                </span>
                <ul className="flex flex-wrap gap-2 md:justify-end">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )

          return (
            <li
              key={project.title}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] shadow-[0_14px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-white/[0.065] hover:shadow-[0_22px_55px_rgba(0,0,0,0.28)]"
            >
              {project.link === '/' ? (
                <a href="/" className="block">
                  {card}
                </a>
              ) : (
                <Link href={project.link ?? '/'} className="block">
                  {card}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}
