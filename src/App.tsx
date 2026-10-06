import { useState } from 'react'
import { colisDemo } from './data/colis'
import { rechercherColis } from './utils/recherche'
import { BarreRecherche } from './components/BarreRecherche'
import { ListeColis } from './components/ListeColis'

export default function App() {
  const [saisie, setSaisie] = useState('')
  const resultats = rechercherColis(colisDemo, saisie)

  return (
    <div className="page">
      <header className="page__entete">
        <h1>Trackr</h1>
        <p>Tous vos colis, au même endroit.</p>
      </header>
      <main>
        <BarreRecherche onRechercher={setSaisie} />
        <p className="compteur" role="status">
          {resultats.length} colis affiché{resultats.length > 1 ? 's' : ''}
        </p>
        <ListeColis colis={resultats} recherche={saisie} />
      </main>
    </div>
  )
}
