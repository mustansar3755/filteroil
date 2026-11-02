import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="scroll-mt-16 bg-brand-deep py-24 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-end lg:px-8">
        <div>
          <h2 className="font-display text-4xl font-bold sm:text-6xl">Let’s talk about cleaner fluids.</h2>
          <p className="mt-5 max-w-xl text-white/75">
            Tell us about your equipment, fluid, and contamination-control goals. Our team can help you find the right approach.
          </p>
        </div>
        <a
          href="mailto:filtroil@filtroil.com"
          className="group inline-flex items-center gap-2 rounded bg-leaf px-8 py-4 font-semibold transition hover:bg-leaf/85"
        >
          Contact us
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
