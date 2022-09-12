import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
      <Link to="/">Accueil</Link>
      <Link to="/authentification"> /////Authentification</Link>
      <Link to="/feed"> /////Fil d'actualités</Link>
    </div>
  )
}

export default Header
