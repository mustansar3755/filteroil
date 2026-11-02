import { Droplet } from 'lucide-react'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 text-sm text-slate-600 md:grid-cols-3 lg:px-8">
        <address className="not-italic leading-relaxed">
          <p className="font-semibold text-ink">Filtroil, LLC - Headquarters</p>
          <p>2626 N Hopkins Rd</p>
          <p>Richmond, Virginia 23224</p>
          <p className="mt-2 flex items-center gap-2"><FaPhoneAlt className="text-leaf" /> (800) 638-3468</p>
          <p className="flex items-center gap-2"><FaPhoneAlt className="text-leaf" /> (804) 359-9525</p>
          <p className="flex items-center gap-2"><FaEnvelope className="text-leaf" /> filtroil@filtroil.com</p>
        </address>
        <address className="not-italic leading-relaxed">
          <p className="font-semibold text-ink">Latin America & Mexico contact</p>
          <p>Jaime Patiño</p>
          <p>Latin American Sales Director</p>
          <p>(561) 860-5085</p>
          <p>jpatino@filtroil.com</p>
        </address>
        <div className="flex items-start md:justify-end">
          <span className="flex items-center gap-2 font-display text-3xl font-extrabold text-brand">
            <Droplet className="h-7 w-7 text-leaf" fill="currentColor" /> Filtroil
          </span>
        </div>
      </div>
    </footer>
  )
}
