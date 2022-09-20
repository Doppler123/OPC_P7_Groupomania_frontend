import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCancel } from "@fortawesome/free-solid-svg-icons"

const logOut = () => {
  document.cookie = "bearerToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC "
  localStorage.clear()
}

let data = {}
localStorage.getItem("userData")
  ? (data = {
      userEmail: JSON.parse(localStorage.getItem("userData")).user_email,
      userFirstName: JSON.parse(localStorage.getItem("userData"))
        .user_firstName,
      userLastName: JSON.parse(localStorage.getItem("userData")).user_lastName,
    })
  : (data = {})

const LogOutButton = () => {
  return (
    <div>
      <hr />
      <p>
        Vous êtes bien connectés en tant que: {data.userFirstName}{" "}
        {data.userLastName} ({data.userEmail})
      </p>
      <button onClick={logOut}>
        <span>
          <FontAwesomeIcon icon={faCancel} color={"gray"} />
        </span>
        Déconnexion
      </button>
    </div>
  )
}

export default LogOutButton
