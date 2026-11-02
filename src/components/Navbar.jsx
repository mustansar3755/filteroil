import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Droplet } from 'lucide-react'
import { navLinks } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-2" aria-label="Filtroil home">
          <Droplet className={`h-6 w-6 ${scrolled || open ? 'text-leaf' : 'text-white'}`} fill="currentColor" />
          <span className={`font-display text-2xl font-extrabold ${scrolled || open ? 'text-brand' : 'text-white'}`}>
            Filtroil
          </span>
        </Link>

        <ul className="hidden items-center gap-6 xl:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-leaf ${
                  scrolled ? 'text-ink' : 'text-white/90'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded bg-leaf px-5 py-2 text-sm font-semibold text-white transition hover:bg-leaf/85 sm:inline-block"
          >
            Contact
          </a>
          <button
            className={`xl:hidden ${scrolled || open ? 'text-ink' : 'text-white'}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-slate-200 bg-white px-5 pb-5 xl:hidden">
          {[...navLinks, { label: 'Contact', href: '#contact' }].map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
