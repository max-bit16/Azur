import { useReveal } from '../hooks/useReveal'

export default function Reservations() {
  useReveal()

  return (
    <main className="bg-surface text-on-surface pt-[160px] pb-section-padding px-20">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-gutter">

        {/* Gauche */}
        <div className="w-full md:w-1/3 flex flex-col justify-center reveal">
          <div className="mb-12">
            <span className="text-label-sm font-label-sm text-tertiary uppercase tracking-[0.2em] mb-4 block">Table D'Honneur</span>
            <h1 className="font-display text-display text-primary mb-6">Réserver une Table</h1>
            <p className="text-body-lg font-body-lg text-secondary italic max-w-md">
              "Le luxe, c'est le silence entre les notes. Réservez votre place au cœur de notre retraite méditerranéenne."
            </p>
          </div>
          <div className="space-y-6 mt-8">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-tertiary-container mt-1">location_on</span>
              <div>
                <p className="font-display text-sm text-primary">Résidence du Cap</p>
                <p className="text-body-md text-on-surface-variant">45 Boulevard de la Garoupe<br />06160 Antibes, France</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-tertiary-container mt-1">call</span>
              <div>
                <p className="font-display text-sm text-primary">Réservations</p>
                <a href="tel:+33493613100" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">
                  +33 (0)4 93 61 31 00
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-tertiary-container mt-1">mail</span>
              <div>
                <p className="font-display text-sm text-primary">Email</p>
                <a href="mailto:contact@azuremas.fr" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">
                  contact@azuremas.fr
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 pt-4 border-t border-[#C5A059]/10">
              <span className="material-symbols-outlined text-tertiary-container mt-1">schedule</span>
              <div>
                <p className="font-display text-sm text-primary mb-3">Heures de Service</p>
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <span className="text-slate-400 uppercase text-xs tracking-widest">Mer — Dim</span>
                  <span className="text-on-surface">12:00 — 14:30</span>
                  <span className="text-slate-400 uppercase text-xs tracking-widest">Dîner</span>
                  <span className="text-on-surface">19:30 — 22:30</span>
                  <span className="text-tertiary italic text-xs">Lun &amp; Mar</span>
                  <span className="text-tertiary italic text-sm">Fermé</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group aspect-[4/5] overflow-hidden mt-12 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
              alt="Table dressée Azure Mas vue mer"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              width="600"
              height="750"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700" />
          </div>
        </div>

        {/* Droite */}
        <div className="w-full md:w-2/3 flex items-start justify-end reveal delay-200">
          <div className="glass-card p-16 w-full max-w-2xl shadow-sunlight">
            <div className="flex items-center gap-4 border-b border-[#C5A059]/10 pb-8 mb-12">
              <span className="font-serif italic text-3xl text-tertiary">01</span>
              <h2 className="text-h2 font-display text-primary">Détails de Réservation</h2>
            </div>
            <div className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="space-y-3">
                  <label className="text-label-sm font-label-sm text-outline uppercase block">Nombre de Convives</label>
                  <div className="relative">
                    <select className="w-full bg-transparent border-b border-[#C5A059]/30 py-4 px-2 font-serif italic text-lg azure-glow appearance-none focus:border-primary transition-all outline-none">
                      <option>2 Personnes</option>
                      <option>3 Personnes</option>
                      <option>4 Personnes</option>
                      <option>5+ Personnes</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-primary pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-label-sm font-label-sm text-outline uppercase block">Heure Souhaitée</label>
                  <div className="relative">
                    <select className="w-full bg-transparent border-b border-[#C5A059]/30 py-4 px-2 font-serif italic text-lg azure-glow appearance-none focus:border-primary transition-all outline-none">
                      <option>19:30</option>
                      <option>20:00</option>
                      <option>20:30</option>
                      <option>21:00</option>
                      <option>21:30</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-primary pointer-events-none">schedule</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-label-sm font-label-sm text-outline uppercase block">Date Souhaitée</label>
                <input
                  type="date"
                  className="w-full bg-transparent border-b border-[#C5A059]/30 py-4 px-2 font-serif italic text-lg azure-glow focus:border-primary transition-all outline-none"
                />
              </div>
              <div className="space-y-3">
                <label className="text-label-sm font-label-sm text-outline uppercase block">Votre Nom</label>
                <input
                  type="text"
                  placeholder="Prénom et Nom"
                  className="w-full bg-transparent border-b border-[#C5A059]/30 py-4 px-2 font-serif italic text-lg azure-glow placeholder:text-outline-variant focus:border-primary transition-all outline-none"
                />
              </div>
              <div className="space-y-3">
                <label className="text-label-sm font-label-sm text-outline uppercase block">Email</label>
                <input
                  type="email"
                  placeholder="votre@email.fr"
                  className="w-full bg-transparent border-b border-[#C5A059]/30 py-4 px-2 font-serif italic text-lg azure-glow placeholder:text-outline-variant focus:border-primary transition-all outline-none"
                />
              </div>
              <div className="space-y-3">
                <label className="text-label-sm font-label-sm text-outline uppercase block">Notes Particulières (Allergies, Célébrations…)</label>
                <textarea
                  placeholder="Ex: Anniversaire de mariage, sans gluten..."
                  rows={3}
                  className="w-full bg-transparent border-b border-[#C5A059]/30 py-4 px-2 font-serif italic text-lg azure-glow placeholder:text-outline-variant focus:border-primary transition-all outline-none resize-none"
                />
              </div>
              <div className="pt-4">
                <a
                  href="mailto:contact@azuremas.fr?subject=Demande de réservation Azure Mas"
                  className="gold-ripple gold-shimmer inline-flex items-center justify-center gap-4 w-full bg-white border border-[#C5A059] text-[#0077B6] px-12 py-5 font-serif tracking-widest uppercase text-sm hover:shadow-2xl transition-all duration-500"
                >
                  ENVOYER LA DEMANDE
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <p className="text-center mt-6 text-label-sm text-[10px] text-outline uppercase tracking-wider">
                  Une confirmation vous sera envoyée par e-mail dans les 15 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
