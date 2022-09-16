import Author from "../../Author"
import Time from "../../Time"
import Text from "../../Text"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"

const IndividualComment = ({ comment }) => {
  const { comment_id, comment_time, comment_text, comment_userId, user_email } =
    comment
  const userIdFromLocalStorage = JSON.parse(
    localStorage.getItem("userData")
  ).user_id

  const deleteComment = () => {
    axios.defaults.headers.post["Content-Type"] = "application/json"
    axios.defaults.timeout = 6000
    axios.defaults.withCredentials = true
    axios
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
    <>
      <div>
        <hr />
        <div>
          <div>
            <Author author={user_email} />
            <Time timestamp={comment_time} />
          </div>
        </div>
        <Text text={comment_text} />
        {userIdFromLocalStorage === parseInt(comment_userId) ? (
          <button onClick={deleteComment}>
            <span>
              <FontAwesomeIcon icon={faTrashCan} color={"gray"} />
            </span>
            Supprimer le commentaire
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </>
  )
}

export default IndividualComment
