import AuthForm from "../../components/AuthForm"
import LogOutButton from "../../components/LogOutButton"

function Authentification() {
  const bearerCookie = document.cookie
  return (
    <div>
      <AuthForm />
      <hr />
      {bearerCookie ? <LogOutButton /> : <div></div>}
    </div>
  )
}

export default Authentification
