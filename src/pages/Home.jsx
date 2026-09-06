import Hero from '../components/home/Hero'
import FeatureCards from '../components/home/FeatureCards'
import LatestContent from '../components/home/LatestContent'
import SEO from '../components/shared/SEO'
import { siteData } from '../lib/content'

export default function Home() {
  return (
    <>
      <SEO
        title={`${siteData.name} — Engineering Student at Pulchowk Campus`}
        description={siteData.shortBio}
      />
      <Hero />
      <FeatureCards />
      <LatestContent />
    </>
  )
}