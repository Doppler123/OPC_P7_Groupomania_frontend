import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
      <Link to="/">Accueil</Link>
      <Link to="/authentification">Authentification</Link>
      <Link to="/wall">Wall</Link>
    </div>
  )
}

export default Header
