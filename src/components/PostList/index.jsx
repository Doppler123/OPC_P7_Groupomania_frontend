import { useState, useEffect } from "react"
import axios from "axios"

import IndividualPost from "./IndividualPost"

function PostList() {
  const [postData, setPostData] = useState([])

  useEffect(() => {
    axios.defaults.headers.post["Content-Type"] = "application/json"
    axios.defaults.timeout = 6000
    axios.defaults.withCredentials = true
    axios
      .get("http://localhost:8000/api/posts/")
      .then((response) => {
        setPostData(response.data)
        console.log(response.data)
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
  }, [])

  return (
    <div>
      {postData.map((post) => {
        return <IndividualPost post={post} key={post.post_id} />
      })}
    </div>
  )
}

export default PostList
