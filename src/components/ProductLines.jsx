import { useRef } from 'react'
import * as Icons from 'lucide-react'
import { Droplet } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from './useGSAPShim'
import LineArt from './LineArt'
import { lines } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function ProductLines() {
  const root = useRef(null)

  useGSAP(() => {
    // schematic strokes draw themselves as each row enters
    gsap.utils.toArray('[data-art]').forEach((art) => {
      const paths = art.querySelectorAll('.draw')
      paths.forEach((p) => {
        const len = p.getTotalLength()
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len })
      })
      gsap.to(paths, {
        strokeDashoffset: 0, duration: 1.4, ease: 'power2.inOut', stagger: 0.12,
        scrollTrigger: { trigger: art, start: 'top 80%', once: true },
      })
    })
    // text column slides in once per row
    gsap.utils.toArray('[data-row-text]').forEach((el) => {
      gsap.from(el, { y: 36, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } })
    })
  }, root)

  return (
    <section ref={root} className="bg-white">
      <div className="mx-auto max-w-7xl px-5 pt-24 lg:px-8">
        <h2 className="max-w-3xl font-display text-4xl font-bold text-brand sm:text-5xl">
          Five filtration lines. One objective: uptime.
        </h2>
      </div>

      {lines.map((l, i) => {
        const Icon = Icons[l.icon]
        const flip = i % 2 === 1
        return (
          <div key={l.id} id={l.id} className={`scroll-mt-16 ${i % 2 ? 'bg-paper' : 'bg-white'}`}>
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
              <div data-art className={`aspect-[400/260] rounded-xl border border-slate-200 bg-white p-4 shadow-sm ${flip ? 'lg:order-2' : ''}`}>
                <LineArt type={l.type} />
              </div>
              <div data-row-text>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-leaf-soft text-leaf">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-3xl font-bold text-brand">{l.title}</h3>
                <p className="mt-4 max-w-xl leading-relaxed text-slate-600">{l.text}</p>
                <ul className="mt-6 space-y-3">
                  {l.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[15px] text-ink">
                      <Droplet className="mt-1 h-4 w-4 shrink-0 text-leaf" fill="currentColor" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
