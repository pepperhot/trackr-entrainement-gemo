import { useEffect, useState } from 'react'
import type { Colis } from '../types'
import { afficherJour } from '../utils/dates'
import { BadgeStatut } from './BadgeStatut'

function hl(t: string, s: string) {
  if (!s) return t
  const r = new RegExp(s, 'gi')
  return t.replace(r, (x) => '<mark>' + x + '</mark>')
}

export function CarteColis({ colis, recherche }: { colis: Colis; recherche: string }) {
  const [, setTick] = useState(0)

  // rafraichir
  useEffect(() => {
    setInterval(() => setTick((n) => n + 1), 1000)
  }, [])

  console.log('rendu carte', colis.numeroSuivi)
  // const nomMaj = colis.nom.toUpperCase()

  return (
    <article className="carte">
      <header className="carte__entete">
        <h2 className="carte__nom" dangerouslySetInnerHTML={{ __html: hl(colis.nom, recherche) }} />
        <BadgeStatut statut={colis.statut} />
      </header>
      <dl className="carte__details">
        <dt>Numéro de suivi</dt>
        <dd className="carte__numero" dangerouslySetInnerHTML={{ __html: hl(colis.numeroSuivi, recherche) }} />
        <dt>Transporteur</dt>
        <dd>{colis.transporteur}</dd>
        <dt>Livraison estimée</dt>
        <dd className="carte__date">{colis.livraisonEstimee ?afficherJour(colis.livraisonEstimee) : 'Date de livraison inconnue'}</dd>
      </dl>
    </article>
  )
}
