import { useState } from "react"
import Button from "../Button"
import axios from "axios"

function CommentForm({ postId }) {
  const [inputValue, setInputValue] = useState("")

  const onFormSubmit = (event) => {
    event.preventDefault() // to prevent refreshing the page every time we submit message

    const newComment = {
      user_id: JSON.parse(localStorage.getItem("userData")).user_id,
      postId: postId,
      comment_text: inputValue,
    }

    axios.defaults.headers.post["Content-Type"] = "application/json"
    axios.defaults.timeout = 6000
    axios.defaults.withCredentials = true

    axios
      .post(
        "http://localhost:8000/api/comments/" + newComment.postId,
        newComment
      )
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

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div>
      <hr />
      <p>Poster un commentaire :</p>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          size="220"
          placeholder="Contenu du commentaire"
          id="comment_text"
          onChange={onInputChange}
          value={inputValue}
        />
        <Button name="Publier" />
      </form>
    </div>
  )
}

export default CommentForm
