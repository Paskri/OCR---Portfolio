import { Link } from 'react-router-dom'
import '../styles/error.css'
export default function Error() {
  return (
    <section className="error">
      <p className="four-o-four">404</p>
      <p className="oups">Oups ! La page que vous demandez n'existe pas</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </section>
  )
}
