import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import ProductLines from '../components/ProductLines'
import HydraulicDiagram from '../components/HydraulicDiagram'
import Why from '../components/Why'
import Industries from '../components/Industries'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'

export default function Home() {
  // fonts load late and shift layout -> recalc trigger positions
  useEffect(() => {
    document.fonts?.ready.then(() => ScrollTrigger.refresh())
  }, [])

  return (
    <>
      <Hero />
      <Stats />
      <ProductLines />
      <HydraulicDiagram />
      <Why />
      <Industries />
      <FAQ />
      <CTA />
    </>
  )
}
