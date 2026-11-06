import { projects } from '@/lib/projects'

export function ProjectList() {
  return (
    <section id="projeler" aria-labelledby="projeler-baslik" className="px-4 py-24 md:px-8">
      <div className="flex items-end justify-between gap-6 border-b-2 border-paper pb-6">
        <h2 id="projeler-baslik" className="font-display text-5xl font-bold leading-none tracking-tighter md:text-8xl">
          {'Projeler'}
        </h2>
        <span className="font-display text-5xl font-bold leading-none text-accent md:text-8xl">
          {String(projects.length).padStart(2, '0')}
        </span>
      </div>

      <ol>
        {projects.map((project, i) => (
          <li key={project.title} className="group border-b border-border">
            <article className="flex flex-col gap-4 py-8 transition-colors md:flex-row md:items-start md:gap-10 md:px-4 md:hover:bg-accent md:hover:text-accent-foreground">
              <span className="font-display text-2xl font-bold text-accent md:w-16 md:group-hover:text-accent-foreground">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="flex-1">
                <h3 className="font-display text-3xl font-bold tracking-tight md:text-5xl">{project.title}</h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground text-pretty md:group-hover:text-accent-foreground">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 md:w-56 md:flex-col md:items-end">
                <span className="text-sm font-bold">
                  {project.kind} {'· '} {project.year}
                </span>
                <ul className="flex flex-wrap gap-2 md:justify-end">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-current px-3 py-1 text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
