import "./AboutMovie.css";
import ActorCard from "./ActorCard.jsx";
const AboutMovie = (props) => {
  const actorsList = props.actors.split(", ");
  actorsList.unshift(props.director);
  return (
    <div className="a">
      <div className="about">
        <h1 className="header">About:</h1>
        <div className="about-text">
          <p>{props.about}</p>
        </div>
      </div>
      <div className="actors">
        <h1 className="header">Actors:</h1>
        <ul className="blocks">
          {actorsList.map(function (name, id) {
            return (
              <li key={id}>
                <ActorCard name={name} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AboutMovie;
