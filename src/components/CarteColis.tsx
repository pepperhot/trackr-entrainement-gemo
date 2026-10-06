import type { Colis } from '../types'
import { afficherJour } from '../utils/dates'
import { BadgeStatut } from './BadgeStatut'

export function CarteColis({ colis }: { colis: Colis }) {
  return (
    <article className="carte">
      <header className="carte__entete">
        <h2 className="carte__nom">{colis.nom}</h2>
        <BadgeStatut statut={colis.statut} />
      </header>
      <dl className="carte__details">
        <dt>Numéro de suivi</dt>
        <dd className="carte__numero">{colis.numeroSuivi}</dd>
        <dt>Transporteur</dt>
        <dd>{colis.transporteur}</dd>
        <dt>Livraison estimée</dt>
        <dd>{colis.livraisonEstimee ? afficherJour(colis.livraisonEstimee) : 'Date de livraison inconnue'}</dd>
      </dl>
    </article>
  )
}
