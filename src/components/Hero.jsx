import { useRef } from 'react'
import { ArrowRight, Droplet } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from './useGSAPShim'

const headline = ['Precision', 'Filtration.', 'Proven', 'Results.']

// ISO 4406 cleanliness code going from dirty to clean = the one hero moment.
export default function Hero() {
  const root = useRef(null)
  const codeRef = useRef(null)
  const barRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 })
    tl.from('[data-word]', { yPercent: 110, duration: 1, ease: 'power4.out', stagger: 0.09 })
      .from('[data-hero]', { y: 24, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, '-=0.5')
      .from('[data-card]', { x: 40, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.9')

    const o = { a: 22, b: 20, c: 17 }
    const write = () =>
      (codeRef.current.textContent = `${Math.round(o.a)}/${Math.round(o.b)}/${Math.round(o.c)}`)
    write()
    gsap.to(o, { a: 14, b: 12, c: 9, duration: 3.2, delay: 1.6, ease: 'power2.inOut', onUpdate: write })
    gsap.fromTo(barRef.current, { width: '92%' }, { width: '22%', duration: 3.2, delay: 1.6, ease: 'power2.inOut' })
  }, root)

  return (
    <section id="top" ref={root} className="grid-bg relative overflow-hidden bg-brand-deep pb-24 pt-32 text-white lg:pt-40">
      <div className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-leaf/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <h1 className="font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
            {headline.map((w, i) => (
              <span key={i} className="mr-4 inline-block overflow-hidden align-bottom">
                <span data-word className="inline-block">{w}</span>
              </span>
            ))}
          </h1>
          <p data-hero className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-leaf-soft">
            Filtration solutions delivering clean industrial fluids for longer component life and more uptime for your critical assets.
          </p>
          <p data-hero className="mt-4 max-w-xl leading-relaxed text-white/70">
            Filtroil designs, manufactures and distributes contamination control filtration systems and diagnostic
            equipment customized for any industrial application where fluid cleanliness is important.
          </p>
          <div data-hero className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded bg-leaf px-7 py-3.5 font-semibold transition hover:bg-leaf/85">
              Let’s talk
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#oil" className="inline-flex items-center rounded border border-white/30 px-7 py-3.5 font-semibold transition hover:bg-white/10">
              See product lines
            </a>
          </div>
        </div>

        <div data-card className="drift rounded-xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Droplet className="h-4 w-4 text-leaf" fill="currentColor" />
            Hydraulic oil cleanliness, ISO 4406
          </div>
          <div ref={codeRef} className="tabular mt-4 font-display text-6xl font-bold sm:text-7xl" />
          <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/15">
            <div ref={barRef} className="h-full rounded-full bg-gradient-to-r from-leaf to-emerald-300" />
          </div>
          <div className="mt-3 flex justify-between text-xs text-white/60">
            <span>Before kidney loop</span>
            <span>After filtration</span>
          </div>
        </div>
      </div>
    </section>
  )
}
