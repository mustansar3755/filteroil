import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from './useGSAPShim'
import { stats } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function Stats() {
  const root = useRef(null)

  useGSAP(() => {
    gsap.utils.toArray('[data-count]').forEach((el) => {
      const end = Number(el.dataset.count)
      const o = { v: 0 }
      ScrollTrigger.create({
        trigger: el,
        start: 'top 92%',
        once: true,
        onEnter: () =>
          gsap.to(o, { v: end, duration: 1.8, ease: 'power2.out', onUpdate: () => (el.textContent = Math.round(o.v)) }),
      })
    })
  }, root)

  return (
    <section ref={root} className="bg-brand text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-14 lg:grid-cols-5 lg:px-8">
        {stats.map((s, i) => (
          <div key={i} className="border-l border-white/20 pl-5">
            <div className="tabular font-display text-5xl font-bold">
              <span data-count={s.value}>0</span>
              <span className="text-leaf">{s.suffix}</span>
            </div>
            <p className="mt-2 max-w-[15rem] text-sm leading-snug text-white/75">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
