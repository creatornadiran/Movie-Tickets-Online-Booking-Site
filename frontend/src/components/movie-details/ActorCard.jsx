import "./ActorCard.css";

const ActorCard = ({ image, name, roleName }) => {
  return (
    <div class="actor-card">
      <img src={image} alt="Background image" class="actor-card-image"></img>
      <div class="actor-card-text">
        <h2>{name}</h2>
        <p>{roleName}</p>
      </div>
    </div>
  );
};

export default ActorCard;
