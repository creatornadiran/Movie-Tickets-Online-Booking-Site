import { useLocation } from "react-router-dom";

const FilmDetailPage = () => {
  const location = useLocation();
  return (
    <div>
      <p>{location.state.name}</p>
    </div>
  );
};

export default FilmDetailPage;
