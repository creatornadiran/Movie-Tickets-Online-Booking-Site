import "./mainpage-card-slider.css";
import FilmCard from "./FilmCard";
import axios from "axios";
import React from "react";

const MainpageCardSlider = (props) => {
  let isInTheatre = props.inTheatre;
  function getInTheatreMovies(movieArray) {
    return movieArray.filter((movieObj) => movieObj.in_theatre === isInTheatre);
  }

  const [movieList, setmovieList] = React.useState(null);
  React.useEffect(() => {
    axios.get("/api/Movies/").then((response) => {
      setmovieList(getInTheatreMovies(response.data));
    });
  }, []);

  if (!movieList) return null;
  return (
    <div
      id={"carouselExampleControls" + props.id}
      className="carousel slide "
      data-ride="carousel"
    >
      <div className="carousel-inner">
        {[...Array(Math.ceil(movieList.length / 5))].map(function (x, i) {
          return (
            <div
              key={i}
              className={i === 0 ? "carousel-item active" : "carousel-item"}
            >
              <div className="cards-wrapper wrapperr">
                {movieList
                  .slice(5 * i, 5 * (i + 1))
                  .filter(
                    (movie) =>
                      movieList.indexOf(movie) >= 5 * i &&
                      movieList.indexOf(movie) < 5 * (i + 1)
                  )
                  .map(function (movie, id) {
                    return <FilmCard key={id} movie={movie} />;
                  })}
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev "
        type="button"
        data-bs-target={"#carouselExampleControls" + props.id}
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon prev-button"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={"#carouselExampleControls" + props.id}
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon next-button"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MainpageCardSlider;
