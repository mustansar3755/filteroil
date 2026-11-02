import { industries } from '../data/content'

export default function Industries() {
  return (
    <section id="industries" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="font-display text-4xl font-bold text-brand sm:text-5xl">Industries served</h2>
        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {industries.map((name) => (
            <li
              key={name}
              className="rounded-lg border border-slate-200 px-4 py-4 text-sm font-medium transition-colors duration-200 hover:border-leaf hover:bg-leaf-soft"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
