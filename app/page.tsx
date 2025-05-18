import Header from "./components/header"
import HeroSection from "./components/hero-section"
import BrandStory from "./components/brand-story"
import Categories from "./components/categories"
import HowItWorks from "./components/how-it-works"
import Testimonials from "./components/testimonials"
import FAQ from "./components/faq"
import CTA from "./components/cta"
import SocialMedia from "./components/social-media"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <BrandStory />
      <Categories />
      <HowItWorks />
      <Testimonials />
      <FAQ />
<<<<<<< HEAD
      <CTA />
=======
      {/* <CTA /> */}
>>>>>>> master
      <SocialMedia />
    </main>
  )
}
