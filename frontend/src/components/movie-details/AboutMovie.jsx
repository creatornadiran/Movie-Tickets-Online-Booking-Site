import "./AboutMovie.css";
import ActorCard from "./ActorCard.jsx";
const AboutMovie = (props) => {
  const actorsList = props.actors;
  return (
    <div className="a">
      <div className="about">
        <h1>About</h1>
        <h3>{props.about}</h3>
      </div>
      <div className="actors">
        <h1>Actors</h1>
        <ul className="blocks">
          {actorsList.map(function (item, id) {
            return (
              <li key={id}>
                <ActorCard
                  image={item.image}
                  name={item.name}
                  roleName={item.image.roleName}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AboutMovie;