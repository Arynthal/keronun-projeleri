export type Project = {
  title: string
  year: string
  kind: string
  description: string
  stack: string[]
  link?: string
}

export const projects: Project[] = [
  {
    title: 'Bu Site',
    year: '2026',
    kind: 'Web',
    description:
      'Şu an baktığın sayfa. Gradyan yok, parlayan kart yok. Arka planda müzik var, soldan sağa bir surat geçiyor.',
    stack: ['Next.js', 'Tailwind'],
  },
  {
    title: 'L.I.M.B.O',
    year: '2024',
    kind: 'Araç',
    description: 'çakma korku oyunu işte :d',
    stack: ['Python', 'Pandas'],
  },
]
