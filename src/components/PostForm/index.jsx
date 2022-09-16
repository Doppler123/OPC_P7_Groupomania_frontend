import { useState } from "react"
import Button from "../Button"
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
    newPost.append("post_imageName", imageName)
    newPost.append(
      "post_imageFile",
      document.getElementById("post_imageFile").files[0]
    )

    axios.defaults.headers.post["Content-Type"] = "application/json"
    axios.defaults.timeout = 6000
    axios.defaults.withCredentials = true

    axios
      .post("http://localhost:8000/api/posts/", newPost)
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

  const imageChoosedOnInput = (e) => {
    setImageName(document.getElementById("post_imageFile").files[0].name)
  }

  return (
    <div>
      <hr />
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
          id="post_text"
          name="post_text"
          onChange={onInputChange}
          value={inputValue}
        />
        <input
          type="file"
          id="post_imageFile"
          name="post_imageFile"
          onInput={imageChoosedOnInput}
        />
        <div>{imageName}</div>
        <Button name="Publier" />
      </form>
      <hr />
    </div>
  )
}

export default PostForm
