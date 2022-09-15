import Author from "../../Author"
import Time from "../../Time"
import Text from "../../Text"

const IndividualComment = ({ comment }) => {
  const { comment_time, comment_text, user_email } = comment

  return (
    <>
      <div>
        <div>
          <div>
            <Author author={user_email} />
            <Time timestamp={comment_time} />
          </div>
        </div>
        <Text text={comment_text} />
        <p></p>
      </div>
    </>
  )
}

export default IndividualComment
