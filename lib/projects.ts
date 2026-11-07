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
      'evet. bu sitede bi proje. yani proje sitesi aslında proje sitesindeki bi proje AAAAAAAAAA',
    stack: ['Next.js'],
  },
  {
    title: 'L.I.M.B.O',
    year: '2026',
    kind: 'Oyun',
    description: 'çakma korku oyunu işte :d',
    stack: ['Python'],
  },
]
