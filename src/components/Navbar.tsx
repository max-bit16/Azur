import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-[#C5A059]/20 bg-white/70 backdrop-blur-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
      <div className="flex justify-between items-center px-20 py-8 w-full max-w-screen-2xl mx-auto">
        <NavLink to="/" className="text-2xl font-serif italic text-[#0077B6] tracking-tighter">
          Azure Mas
        </NavLink>
        <div className="hidden md:flex gap-12">
          {[
            { label: 'Accueil', to: '/' },
            { label: 'Menu', to: '/menu' },
            { label: 'Galerie', to: '/galerie' },
            { label: 'Réservations', to: '/reservations' },
            { label: 'Contact', to: '/contact' },
          ].map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `font-serif tracking-widest uppercase text-xs antialiased transition-all duration-500 ${
                  isActive
                    ? 'text-[#0077B6] border-b border-[#C5A059] pb-1'
                    : 'text-slate-500 hover:text-[#0077B6]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
        <NavLink
          to="/reservations"
          className="gold-ripple gold-shimmer bg-white border border-[#C5A059] text-[#0077B6] px-8 py-3 font-serif tracking-widest uppercase text-xs antialiased"
        >
          Réserver
        </NavLink>
      </div>
    </nav>
  )
}
