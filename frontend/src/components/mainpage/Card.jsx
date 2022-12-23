const Card = (props) => {

  return (
    <div class="card">
    <img src={props.img} alt="Slide" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      <a onClick={props.function}   class="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
  )
}

export default Card
