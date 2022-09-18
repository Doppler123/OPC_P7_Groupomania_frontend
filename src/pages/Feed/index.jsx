import PostForm from "../../components/PostForm"
import PostList from "../../components/PostList"
import LogOutButton from "../../components/LogOutButton"

function Feed() {
  const bearerCookie = document.cookie

  return (
    <div>
      {bearerCookie ? (
        <div>
          <LogOutButton />
          <PostForm />
          <p>Voici les derniers posts :</p>
          <PostList />
        </div>
      ) : (
        <div>Il faut vous connecter pour pouvoir accéder aux discussions!</div>
      )}
    </div>
  )
}

export default Feed
