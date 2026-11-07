import { Credits } from '@/components/credits'
import { ProjectList } from '@/components/project-list'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <ProjectList />
        <Credits />
      </main>
    </>
  )
}
