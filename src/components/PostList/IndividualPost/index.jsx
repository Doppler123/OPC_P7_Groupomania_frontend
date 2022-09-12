import Author from "../Author"
import Text from "../Text"
import Image from "../Image"
import Time from "../Time"
import PostNumber from "../PostNumber"

// import dayjs from "dayjs"

const Post = ({ post }) => {
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
            par : <Author author={user_email} />
            le : <Time timestamp={post_time} />
          </div>
        </div>
        <Text text={post_text} />
        <Image imageUrl={post_imagePath} imageName={post_imageName} />
        <PostNumber postNumber={post_id} />
        <p></p>
      </div>
    </>
  )
}

export default Post
