import { useState } from 'react'
import { Plus } from 'lucide-react'
import { faqs } from '../data/content'

// Pure CSS accordion (grid-rows 0fr -> 1fr) - no height bugs, easy to port to WordPress.
export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="scroll-mt-16 bg-paper py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <h2 className="font-display text-4xl font-bold text-brand sm:text-5xl">Frequently asked questions</h2>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-semibold">{f.q}</span>
                  <Plus className={`h-5 w-5 shrink-0 text-leaf transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="pb-6 leading-relaxed text-slate-600">{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
