import axios from "axios"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRecycle } from "@fortawesome/free-solid-svg-icons"

const ModifyButton = ({ publication_id }) => {
  /*   const deletePost = () => {
    axios.defaults.headers.post["Content-Type"] = "application/json"
    axios.defaults.timeout = 6000
    axios.defaults.withCredentials = true
    axios
      .delete("http://localhost:8000/api/posts/" + publication_id)
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
  } */

  return (
    <button>
      <span>
        <FontAwesomeIcon icon={faRecycle} color={"gray"} />
      </span>
      Modifier la publication
    </button>
  )
}

export default ModifyButton
