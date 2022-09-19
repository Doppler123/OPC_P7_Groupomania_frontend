import axios from "axios"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"

const DeleteButton = ({ post_id, comment_id }) => {
  const deletePost = () => {
    axios.defaults.headers.post["Content-Type"] = "application/json"
    axios.defaults.timeout = 6000
    axios.defaults.withCredentials = true

    post_id
      ? axios.delete("http://localhost:8000/api/posts/" + post_id)
      : axios
          .delete("http://localhost:8000/api/comments/" + comment_id)

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

  return (
    <button onClick={deletePost}>
      <span>
        <FontAwesomeIcon icon={faTrashCan} color={"gray"} />
      </span>
      Supprimer la publication
    </button>
  )
}

export default DeleteButton
