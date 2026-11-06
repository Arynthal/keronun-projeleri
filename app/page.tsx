import { Credits } from '@/components/credits'
import { MusicGate } from '@/components/music-gate'
import { ProjectList } from '@/components/project-list'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <MusicGate />
      <SiteHeader />
      <main>
        <ProjectList />
        <Credits />
      </main>
    </>
  )
}
