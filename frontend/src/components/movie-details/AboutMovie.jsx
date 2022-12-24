import "./AboutMovie.css";
import ActorCard from "./ActorCard.jsx";
const AboutMovie = (props) => {
  const actorsList = props.actors;
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
          {actorsList.map(function (item, id) {
            return (
              <li key={id}>
                <ActorCard
                  image={item.image}
                  name={item.name}
                  roleName={item.roleName}
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
