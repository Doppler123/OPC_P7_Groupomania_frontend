import Author from "../../Author"
import Time from "../../Time"
import Text from "../../Text"
import Image from "./Image"
import PostNumber from "./PostNumber"
import InteractionButtons from "./InteractionButtons"
import CommentsList from "../../CommentsList"
import CommentForm from "../../CommentForm"

const IndividualPost = ({ post }) => {
  const {
    post_time,
    post_text,
    post_id,
    user_email,
    post_imagePath,
    post_imageName,
  } = post

  return (
    <>
      <div>
        <div>
          <div>
            <Author author={user_email} />
            <Time timestamp={post_time} />
          </div>
        </div>
        <Text text={post_text} />
        <Image imageUrl={post_imagePath} imageName={post_imageName} />
        <PostNumber postNumber={post_id} />
        <InteractionButtons postId={post_id} />
        <CommentsList postId={post_id} />
        <CommentForm postId={post_id} />
        <p></p>
      </div>
    </>
  )
}

export default IndividualPost
