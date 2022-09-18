import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
      <img
        src="../../images/logos/icon-left-font-monochrome-black.svg"
        alt="Logo Groupomania"
      />
      <Link to="/">Accueil</Link>
      <Link to="/authentification"> /////Authentification</Link>
      <Link to="/feed"> /////Discussions</Link>
    </div>
  )
}

export default Header
