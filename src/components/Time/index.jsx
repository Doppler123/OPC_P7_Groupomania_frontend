const Time = ({ timestamp }) => {
  var time = new Date(timestamp)
  console.log(time)
  return <div>{timestamp}</div>
}

export default Time
