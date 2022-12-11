import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar.jsx";
import AboutMovie from "./AboutMovie.jsx";
import UpperCard from "./UpperCard";
const FilmDetailPage = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <UpperCard
        name={location.state.name}
        img={location.state.img}
        score={location.state.score}
      />
      <AboutMovie />
    </div>
  );
};

export default FilmDetailPage;
