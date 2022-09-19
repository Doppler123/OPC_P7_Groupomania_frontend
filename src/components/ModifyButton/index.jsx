import { useState } from "react"
import axios from "axios"

import Button from "../Button"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRecycle } from "@fortawesome/free-solid-svg-icons"

const ModifyButton = ({ post_id, comment_id }) => {
  const [isShown, setIsShown] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }
  const modifyHandle = (event) => {
    setIsShown((current) => !current)
  }

  const modifyPost = (event) => {
    event.preventDefault() // to prevent refreshing the page every time we submit message

    let modifiedPost

    post_id
      ? (modifiedPost = {
          post_text: inputValue,
        })
      : (modifiedPost = {
          comment_text: inputValue,
        })

    axios.defaults.headers.post["Content-Type"] = "application/json"
    axios.defaults.timeout = 6000
    axios.defaults.withCredentials = true

    post_id
      ? axios.put("http://localhost:8000/api/posts/" + post_id, modifiedPost)
      : axios
          .put("http://localhost:8000/api/comments/" + comment_id, modifiedPost)

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
    // document.location.reload()
  }

  return (
    <div>
      <button onClick={modifyHandle}>
        <span>
          <FontAwesomeIcon icon={faRecycle} color={isShown ? "red" : "grey"} />
        </span>
        Modifier votre publication
      </button>
      {isShown && (
        <div>
          <form onSubmit={modifyPost}>
            <input
              type="text"
              size="50"
              placeholder="Nouveau texte à publier en remplacement du précédent:"
              id="publication_text"
              name="publication_text"
              onChange={onInputChange}
              value={inputValue}
            />
            <Button name="Publier" />
          </form>
        </div>
      )}
    </div>
  )
}

export default ModifyButton
