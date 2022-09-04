import { useState } from "react"
import Button from "./Button"
import axios from "axios"

function PostForm() {
  const [inputValue, setInputValue] = useState("")
  const [imageName, setImageName] = useState("")

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault() // to prevent refreshing the page every time we submit message

    const newPost = new FormData()
    newPost.append("post_text", inputValue)
    newPost.append("post_imageUrl", imageName)
    newPost.append(
      "post_imageFile",
      document.getElementById("createPost-post_imageFile").files[0]
    )

    console.log(newPost)

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
    //document.location.reload()
  }

  const imageChoosedOnInput = (e) => {
    setImageName(e.target.value)
  }

  return (
    <form
      onSubmit={onFormSubmit}
      method="POST"
      action="/api/posts"
      encType="multipart/form-data"
    >
      <input
        type="text"
        size="220"
        placeholder="Contenu du post"
        id="createPost-post_text"
        name="post_text"
        onChange={onInputChange}
        value={inputValue}
      />
      <input
        type="file"
        id="createPost-post_imageFile"
        name="createPost-post_imageFile"
        onInput={imageChoosedOnInput}
      />
      <div>{imageName}</div>
      <Button name="Publier" />
    </form>
  )
}

export default PostForm
