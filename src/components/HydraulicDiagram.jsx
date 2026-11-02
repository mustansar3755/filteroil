import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from './useGSAPShim'

gsap.registerPlugin(ScrollTrigger)

const S = { fill: 'none', strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round' }
const t = { fontSize: 11, fill: '#5b6b84', fontFamily: 'IBM Plex Sans', letterSpacing: 1 }

export default function HydraulicDiagram() {
  const root = useRef(null)

  useGSAP(() => {
    const parts = root.current.querySelectorAll('.draw')
    parts.forEach((p) => {
      const len = p.getTotalLength()
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len })
    })
    gsap.to(parts, {
      strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut', stagger: 0.08,
      scrollTrigger: { trigger: root.current, start: 'top 70%', once: true },
    })
    gsap.from('[data-label]', {
      opacity: 0, duration: 0.8, stagger: 0.08, delay: 0.6,
      scrollTrigger: { trigger: root.current, start: 'top 70%', once: true },
    })
  }, root)

  return (
    <section id="schematic" ref={root} className="scroll-mt-16 bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="max-w-3xl font-display text-4xl font-bold text-brand sm:text-5xl">
          Where filtration belongs in a hydraulic system
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Contamination finds its way into hydraulic systems in several ways. Filtroil offers a solution for every
          source, so contamination never makes it into your reservoir or gearbox.
        </p>

        <div className="mt-12 overflow-x-auto rounded-xl border border-slate-200 bg-paper p-4 sm:p-8">
          <svg viewBox="0 0 900 420" className="mx-auto min-w-[640px]" role="img" aria-label="Hydraulic system filtration diagram">
            {/* kidney loop cart */}
            <rect className="draw" x="40" y="40" width="260" height="140" stroke="#3a9d34" {...S} strokeDasharray="6 6" />
            <circle className="draw" cx="100" cy="100" r="24" stroke="#0a3d8f" {...S} />
            <rect className="draw" x="190" y="70" width="44" height="70" stroke="#0a3d8f" {...S} />
            {/* reservoir */}
            <rect className="draw" x="60" y="200" width="270" height="170" stroke="#0a3d8f" {...S} />
            <rect className="draw" x="150" y="270" width="40" height="80" stroke="#0a3d8f" {...S} />
            {/* breather */}
            <rect className="draw" x="340" y="130" width="40" height="60" stroke="#0a3d8f" {...S} />
            {/* pump, hp filter, machine, return filter */}
            <circle className="draw" cx="480" cy="330" r="26" stroke="#0a3d8f" {...S} />
            <rect className="draw" x="600" y="235" width="50" height="75" stroke="#0a3d8f" {...S} />
            <rect className="draw" x="700" y="50" width="170" height="110" stroke="#0a3d8f" {...S} />
            <rect className="draw" x="560" y="100" width="50" height="50" stroke="#0a3d8f" {...S} />

            {/* moving flow lines */}
            <path className="flow" d="M100 200 V124" stroke="#0a3d8f" {...S} />
            <path className="flow" d="M124 100 H190" stroke="#0a3d8f" {...S} />
            <path className="flow" d="M234 105 H260 V200" stroke="#3a9d34" {...S} />
            <path className="flow" d="M360 190 V200" stroke="#3a9d34" {...S} />
            <path className="flow" d="M330 330 H454" stroke="#0a3d8f" {...S} />
            <path className="flow" d="M506 330 H625 V310" stroke="#0a3d8f" {...S} />
            <path className="flow" d="M625 235 V130 H700" stroke="#0a3d8f" {...S} />
            <path className="flow" d="M785 50 V25 H585 V100" stroke="#0a3d8f" {...S} />
            <path className="flow" d="M585 150 V180 H290 V200" stroke="#3a9d34" {...S} />

            <g data-label>
              <text x="44" y="32" style={t}>KIDNEY LOOP FILTER CART (OFFLINE)</text>
              <text x="86" y="145" style={t}>PUMP</text>
              <text x="192" y="62" style={t}>FILTER</text>
              <text x="60" y="392" style={t}>HYDRAULIC RESERVOIR</text>
              <text x="132" y="262" style={t}>IN-TANK FILTER</text>
              <text x="322" y="120" style={t}>DESICCANT BREATHER</text>
              <text x="560" y="92" style={t}>RETURN LINE FILTER</text>
              <text x="744" y="110" style={t}>MACHINE</text>
              <text x="580" y="230" style={t}>HIGH-PRESSURE FILTER</text>
              <text x="440" y="380" style={t}>MAIN PUMP</text>
              <text x="300" y="175" style={t}>CLEAN OIL RETURN</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
