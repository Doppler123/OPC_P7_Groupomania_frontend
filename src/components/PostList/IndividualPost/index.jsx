import Author from "../../Author"
import Time from "../../Time"
import Text from "../../Text"
import Image from "./Image"
import PostNumber from "./PostNumber"
import InteractionButtons from "./InteractionButtons"
import axios from "axios"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"

const IndividualPost = ({ post }) => {
  const {
    post_time,
    post_text,
    post_id,
    user_email,
    post_imagePath,
    post_imageName,
  } = post

  const deletePost = () => {
    axios.defaults.headers.post["Content-Type"] = "application/json"
    axios.defaults.timeout = 6000
    axios.defaults.withCredentials = true
    axios
      .delete("http://localhost:8000/api/posts/" + post_id)
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

  const emailFromLocalStorage = JSON.parse(
    localStorage.getItem("userData")
  ).user_email

  return (
    <>
      <div>
        <div>
          <PostNumber postNumber={post_id} />
          <div>
            <Author author={user_email} />
            <Time timestamp={post_time} />
          </div>
        </div>
        <Text text={post_text} />
        <Image imageUrl={post_imagePath} imageName={post_imageName} />

        {emailFromLocalStorage === user_email ? (
          <button onClick={deletePost}>
            <span>
              <FontAwesomeIcon icon={faTrashCan} color={"gray"} />
            </span>
            Supprimer le post
          </button>
        ) : (
          <div></div>
        )}

        <InteractionButtons postId={post_id} />
      </div>
    </>
  )
}

export default IndividualPost
