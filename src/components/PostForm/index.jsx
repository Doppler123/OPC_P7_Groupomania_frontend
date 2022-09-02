import { useState } from "react"
import Button from "./Button"
import axios from "axios"

function PostForm() {
  const [newPost, setNewPost] = useState({
    post_text: "",
  })

  const submitPost = (event) => {
    event.preventDefault() // to prevent refreshing the page every time we submit message

    axios.defaults.headers.post["Content-Type"] = "application/json"
    axios.defaults.timeout = 6000
    axios.defaults.withCredentials = true

    axios
      .post("http://localhost:8000/api/posts/", newPost)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        // Error 😨
        if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          console.log(error.request)
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log("Error", error.message)
        }
        console.log(error.config)
      })
  }

  return (
    <form className="form" onSubmit={submitPost}>
      <input
        type="text"
        minlength="4"
        maxlength="220"
        size="220"
        placeholder="Contenu du post"
        id="createPost-post_text"
        name="post_text"
        onChange={(e) =>
          setNewPost({
            ...newPost,
            post_text: e.target.value,
          })
        }
        value={newPost.post_text}
      />
      <Button name="Publier" />

      {/*       <input 
      type="file"
      /> */}
    </form>
  )
}

export default PostForm
