import { why } from '../data/content'

export default function Why() {
  return (
    <section id="why" className="scroll-mt-16 bg-brand py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="max-w-3xl font-display text-4xl font-bold sm:text-5xl">
          Four outcomes maintenance teams get measured on.
        </h2>
        <p className="mt-5 max-w-3xl text-white/75">
          Every Filtroil system exists to move the same four numbers: what you spend on maintenance, how long your oil
          and components last, how reliably assets run, and how much of the year they run at all.
        </p>
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((w) => (
            <div key={w.title} className="group bg-brand p-8 transition-colors duration-300 hover:bg-brand-deep">
              <div className="mb-5 h-1 w-10 bg-leaf transition-all duration-300 group-hover:w-20" />
              <h3 className="font-display text-xl font-semibold">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
