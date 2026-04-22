import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useTilt } from '../hooks/useTilt'

const dishes = [
  {
    name: 'Langoustine Grillée',
    desc: 'Zestes de citron de Menton, émulsion à l\'huile d\'olive vierge.',
    price: '42€',
    provenance: 'Pêche côtière de la Baie des Anges',
    wine: 'Cassis Blanc, Domaine de la Ferme Blanche',
    img: 'https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=600&q=80',
    alt: 'Langoustine grillée gastronomique Azure Mas',
  },
  {
    name: 'Saint-Pierre Truffé',
    desc: 'Pavé de ligne, fines lamelles de truffe noire du Haut-Var, asperges blanches.',
    price: '58€',
    provenance: 'Truffe Tuber Melanosporum, Beurre d\'Isigny',
    wine: 'Meursault 1er Cru, Les Perrières',
    img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80',
    alt: 'Saint-Pierre truffé Azure Mas',
  },
  {
    name: 'Burrata AOP',
    desc: 'Cœur crémeux, tomates anciennes, basilic pourpre et or pur 24 carats.',
    price: '28€',
    provenance: 'Sélection artisanale des Pouilles, Italie',
    wine: 'Côtes de Provence Rosé, Château d\'Esclans',
    img: 'https://images.unsplash.com/photo-1621510456681-2330135e5871?w=600&q=80',
    alt: 'Burrata AOP Azure Mas',
  },
]

const wines = [
  { name: 'Château Miraval Côtes de Provence', desc: 'Notes de fleurs blanches et fraise des bois', price: '75€' },
  { name: "Garrus by Château d'Esclans", desc: 'Puissance, élégance, le summum du rosé', price: '190€' },
  { name: 'Domaine Ott - Clos Mireille', desc: 'Minéralité saline, reflets cristallins', price: '95€' },
  { name: 'Minuty 281', desc: 'Intensité aromatique, design iconique', price: '120€' },
]

export default function Menu() {
  useReveal()
  const dishesRef = useRef<HTMLDivElement>(null)
  useTilt(dishesRef)

  return (
    <main className="bg-surface text-on-surface">
      {/* Header */}
      <section className="pt-40 pb-20 px-20 bg-surface-container-lowest">
        <div className="max-w-screen-2xl mx-auto max-w-3xl">
          <p className="text-label-sm font-label-sm text-tertiary uppercase mb-4 tracking-[0.3em]">La Carte Saisonnière</p>
          <h1 className="text-display font-display text-primary mb-6">L'Art de la Mer &amp; de la Terre</h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant italic max-w-2xl">
            Une symphonie culinaire inspirée par les rivages d'azur et les jardins secrets de Provence.
          </p>
        </div>
      </section>

      {/* Dishes grid */}
      <section className="max-w-screen-2xl mx-auto px-20 py-section-padding">
        <div ref={dishesRef} className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {dishes.map((dish) => (
            <div key={dish.name} className="tilt-card glass-card relative overflow-hidden group">
              <div className="gold-sparkle" />
              <div className="h-80 overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-h3 font-display text-primary">{dish.name}</h3>
                  <span className="text-h3 font-display text-tertiary">{dish.price}</span>
                </div>
                <p className="text-body-md font-body-md text-on-surface-variant mb-8 italic">{dish.desc}</p>
                <div className="overlay-content border-t border-[#C5A059]/10 pt-6 space-y-4">
                  <div>
                    <span className="font-label-sm text-[10px] uppercase text-slate-400 block mb-1 tracking-widest">Provenance</span>
                    <p className="text-body-md text-sm">{dish.provenance}</p>
                  </div>
                  <div>
                    <span className="font-label-sm text-[10px] uppercase text-slate-400 block mb-1 tracking-widest">Accord Mets &amp; Vins</span>
                    <p className="text-body-md text-sm text-[#0077B6]">{dish.wine}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sommelier */}
      <section className="bg-slate-50 py-section-padding">
        <div className="max-w-screen-2xl mx-auto px-20">
          <div className="text-center mb-20 reveal">
            <p className="text-label-sm font-label-sm text-tertiary uppercase mb-4 tracking-[0.3em]">La Cave d'Exception</p>
            <h2 className="text-h1 font-display text-primary">Le Sommelier Virtuel</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-12 mb-20 border-b border-[#C5A059]/10 pb-6">
            {['Provence Rosés', 'Corsican Whites', 'Champagnes', 'Grands Crus Rouges'].map((cat, i) => (
              <button
                key={cat}
                className={`font-serif tracking-widest uppercase text-xs pb-2 transition-colors ${i === 0 ? 'text-[#0077B6] border-b border-[#C5A059]' : 'text-slate-400 hover:text-primary'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {wines.map((wine) => (
              <div key={wine.name} className="flex justify-between items-end border-b border-[#C5A059]/10 pb-4 group reveal">
                <div>
                  <p className="font-display text-lg text-primary group-hover:translate-x-2 transition-transform duration-500">{wine.name}</p>
                  <p className="text-body-md text-sm text-on-surface-variant italic">{wine.desc}</p>
                </div>
                <span className="font-display text-tertiary ml-8 shrink-0">{wine.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-screen-2xl mx-auto px-20 pt-section-padding pb-section-padding text-center">
        <div className="glass-card py-24 px-12">
          <h2 className="text-h2 font-display text-primary mb-8 italic">Une table face à l'horizon vous attend.</h2>
          <a
            href="mailto:contact@azuremas.fr?subject=Demande de réservation Azure Mas"
            className="gold-ripple gold-shimmer inline-block bg-white border border-[#C5A059] text-[#0077B6] px-12 py-5 font-serif tracking-widest uppercase text-sm"
          >
            Réserver l'Expérience
          </a>
        </div>
      </section>
    </main>
  )
}
