const Image = ({ imageUrl, imageName }) => {
  return (
    <div>
      {<img src={"http://localhost:8000/" + imageUrl} alt={imageName} />}
    </div>
  )
}
export default Image
