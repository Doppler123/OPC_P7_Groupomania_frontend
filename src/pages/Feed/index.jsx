import PostForm from "../../components/PostForm"
import PostList from "../../components/PostList"

function Feed() {
  return (
    <div>
      <p>Bienvenue sur votre fil d'actualités</p>
      <PostForm />
      <PostList />
    </div>
  )
}

export default Feed
