import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar.jsx";
import AboutMovie from "./AboutMovie.jsx";
import UpperCard from "./UpperCard";
const MovieDetailPage = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <UpperCard
        name={location.state.name}
        img={location.state.img}
        score={location.state.score}
        tags={location.state.tags}
        duration={location.state.duration}
      />
      <AboutMovie about={location.state.about} actors={location.state.actors} />
    </div>
  );
};

export default MovieDetailPage;
