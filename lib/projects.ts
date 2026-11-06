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
    title: 'Hava Durumu Botu',
    year: '2026',
    kind: 'Bot',
    description:
      'Her sabah 08:00’de Discord kanalına günün hava durumunu atan küçük bir bot. Yağmur yağacaksa ayrıca uyarıyor.',
    stack: ['Node.js', 'Discord API'],
  },
  {
    title: 'Not Defteri Uygulaması',
    year: '2025',
    kind: 'Web',
    description:
      'Sade, hızlı, reklamsız bir not uygulaması. Klavye kısayollarıyla her şey yapılabiliyor.',
    stack: ['Next.js', 'Postgres'],
  },
  {
    title: 'Piksel Oyun',
    year: '2025',
    kind: 'Oyun',
    description:
      'Bir hafta sonunda yaptığım 2D platform oyunu. Üç bölüm, bir boss, sayısız bug.',
    stack: ['Godot', 'GDScript'],
  },
  {
    title: 'Kişisel Bütçe Tablosu',
    year: '2024',
    kind: 'Araç',
    description:
      'Harcamalarımı takip etmek için yazdığım araç. Ay sonunda nereye para gittiğini grafikle gösteriyor.',
    stack: ['Python', 'Pandas'],
  },
  {
    title: 'Bu Site',
    year: '2026',
    kind: 'Web',
    description:
      'Şu an baktığın sayfa. Gradyan yok, parlayan kart yok. Arka planda müzik var, soldan sağa bir surat geçiyor.',
    stack: ['Next.js', 'Tailwind'],
  },
]
