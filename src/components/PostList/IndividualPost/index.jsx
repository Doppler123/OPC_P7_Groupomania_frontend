import Author from "../../Author"
import Time from "../../Time"
import Text from "../../Text"
import DeleteButton from "../../DeleteButton"
import ModifyButton from "../../ModifyButton"
import Image from "./Image"
import PostNumber from "./PostNumber"
import LikeAndCommentButtons from "./LikeAndCommentButtons"

import "./individualPost.scss"

const IndividualPost = ({ post }) => {
  const {
    post_time,
    post_text,
    post_id,
    user_email,
    user_firstName,
    user_lastName,
    post_imagePath,
    post_imageName,
  } = post

  const emailFromLocalStorage = JSON.parse(
    localStorage.getItem("userData")
  ).user_email

  return (
    <>
      <div className="card" id="postIndividualCard">
        <div id="postNumber">
          <PostNumber postNumber={post_id} />
        </div>
        <div className="card-header">
          <Author
            author_email={user_email}
            author_firstName={user_firstName}
            author_lastName={user_lastName}
          />
          <Time timestamp={post_time} />
        </div>
        <div className="card-body">
          <Text text={post_text} />
          {emailFromLocalStorage === user_email ||
          emailFromLocalStorage === "admin@groupomania.com" ? (
            <ModifyButton post_id={post_id} />
          ) : (
            <div></div>
          )}
          <Image imageUrl={post_imagePath} imageName={post_imageName} />

          {emailFromLocalStorage === user_email ||
          emailFromLocalStorage === "admin@groupomania.com" ? (
            <DeleteButton post_id={post_id} />
          ) : (
            <div></div>
          )}
          <LikeAndCommentButtons postId={post_id} />
        </div>
      </div>
    </>
  )
}

export default IndividualPost
