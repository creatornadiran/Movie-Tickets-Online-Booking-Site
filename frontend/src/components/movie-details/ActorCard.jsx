import "./ActorCard.css";

const ActorCard = ({ name, director }) => {
  let imgname = name.replaceAll(" ", "").toLowerCase();
  return (
    <div class="actor-card">
      <img
        src={require("../../assets/images/actors/" + imgname + ".jpg")}
        alt="Background image"
        class="actor-card-image"
      ></img>
      <div class="actor-card-text">
        <h2>{director ? name + " (Director)" : name}</h2>
      </div>
    </div>
  );
};

export default ActorCard;
