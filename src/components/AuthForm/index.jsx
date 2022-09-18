import { useState } from "react"
import Button from "../Button"
import axios from "axios"

function AuthForm() {
  const [userLogin, setUserLogin] = useState({
    user_email: "",
    user_password: "",
  })

  const [userSignup, setUserSignup] = useState({
    user_email: "",
    user_password: "",
  })

  const login = (event) => {
    event.preventDefault() // to prevent refreshing the page every time we submit message

    axios.defaults.headers.post["Content-Type"] = "application/json"
    axios.defaults.timeout = 6000
    axios.defaults.withCredentials = true

    axios
      .post("http://localhost:8000/api/auth/login", userLogin)
      .then((response) => {
        localStorage.setItem("userData", JSON.stringify(response.data.user))
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log("Error", error.message)
        }
        console.log(error.config)
      })
  }

  const signup = (event) => {
    event.preventDefault() // to prevent refreshing the page every time we submit message

    axios.defaults.headers.post["Content-Type"] = "application/json"
    axios.defaults.timeout = 6000
    axios.defaults.withCredentials = true

    axios
      .post("http://localhost:8000/api/auth/signup", userSignup)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log("Error", error.message)
        }
        console.log(error.config)
      })
  }

  const bearerCookie = document.cookie

  return (
    <div>
      {bearerCookie ? (
        <div></div>
      ) : (
        <div>
          <hr />
          Connectez-vous :
          <form className="form" onSubmit={login}>
            <input
              type="email"
              placeholder="Adresse mail"
              id="login-user_email"
              name="user_email"
              onChange={(e) =>
                setUserLogin({
                  ...userLogin,
                  user_email: e.target.value,
                })
              }
              value={userLogin.user_email}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              id="login-user_password"
              name="user_password"
              onChange={(e) =>
                setUserLogin({
                  ...userLogin,
                  user_password: e.target.value,
                })
              }
              value={userLogin.user_password}
            />
            <Button name="Connexion" />
          </form>
          <hr />
          Inscrivez-vous:
          <form className="form" onSubmit={signup}>
            <input
              type="email"
              placeholder="Adresse mail"
              id="signup-user_email"
              name="user_email"
              onChange={(e) =>
                setUserSignup({
                  ...userSignup,
                  user_email: e.target.value,
                })
              }
              value={userSignup.user_email}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              id="signup-user_password"
              name="user_password"
              onChange={(e) =>
                setUserSignup({
                  ...userSignup,
                  user_password: e.target.value,
                })
              }
              value={userSignup.user_password}
            />
            <input
              type="text"
              placeholder="Prénom"
              id="signup-firstName"
              name="user_firstName"
              onChange={(e) =>
                setUserSignup({
                  ...userSignup,
                  user_firstName: e.target.value,
                })
              }
              value={userSignup.user_firstName}
            />
            <input
              type="text"
              placeholder="Nom"
              id="signup-lastName"
              name="user_lastName"
              onChange={(e) =>
                setUserSignup({
                  ...userSignup,
                  user_lastName: e.target.value,
                })
              }
              value={userSignup.user_lastName}
            />
            <Button name="Inscription" />
          </form>
        </div>
      )}
    </div>
  )
}

export default AuthForm
