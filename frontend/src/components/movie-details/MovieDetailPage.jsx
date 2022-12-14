import { useLocation } from "react-router-dom";
import AboutMovie from "./AboutMovie.jsx";
import UpperCard from "./UpperCard";
const MovieDetailPage = () => {
  const location = useLocation();
  return (
    <div>
      <UpperCard
        movie_id={location.state.movie_id}
        name={location.state.name}
        img={location.state.img}
        score={location.state.score}
        tags={location.state.tags}
        duration={location.state.duration}
        in_theatre={location.state.in_theatre}
        date={location.state.date}
      />
      <AboutMovie
        about={location.state.about}
        actors={location.state.actors}
        director={location.state.director}
      />
    </div>
  );
};

export default MovieDetailPage;
