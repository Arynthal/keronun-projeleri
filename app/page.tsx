import { Credits } from '@/components/credits'
import { MusicGate } from '@/components/music-gate'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <MusicGate />
      <SiteHeader />
      <main>
        <Credits />
      </main>
    </>
  )
}
