import type { Colis } from '../types'
import { CarteColis } from './CarteColis'

export function ListeColis({ colis, recherche }: { colis: Colis[]; recherche: string }) {
  if (colis.length === 0) {
    return <p className="message-vide">Aucun colis trouvé.</p>
  }
  return (
    <ul className="liste">
      {colis.map((c) => (
        <li key={c.numeroSuivi}>
          <CarteColis colis={c} recherche={recherche} />
        </li>
      ))}
    </ul>
  )
}
