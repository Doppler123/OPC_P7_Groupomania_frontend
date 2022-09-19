import Author from "../../Author"
import Time from "../../Time"
import Text from "../../Text"
import DeleteButton from "../../DeleteButton"
import ModifyButton from "../../ModifyButton"
import Image from "./Image"
import PostNumber from "./PostNumber"
import LikeAndCommentButtons from "./LikeAndCommentButtons"

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
      <div>
        <div>
          <PostNumber postNumber={post_id} />
          <div>
            <Author
              author_email={user_email}
              author_firstName={user_firstName}
              author_lastName={user_lastName}
            />
            <Time timestamp={post_time} />
          </div>
        </div>
        <Text text={post_text} />
        {emailFromLocalStorage === user_email ? (
          <ModifyButton post_id={post_id} />
        ) : (
          <div></div>
        )}
        <Image imageUrl={post_imagePath} imageName={post_imageName} />

        {emailFromLocalStorage === user_email ? (
          <DeleteButton post_id={post_id} />
        ) : (
          <div></div>
        )}

        <LikeAndCommentButtons postId={post_id} />
      </div>
    </>
  )
}

export default IndividualPost
