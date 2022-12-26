import "./mainpage-card-slider.css";
import FilmCard from "./FilmCard";
import axios from "axios";
import React from "react";

const MainpageCardSlider = (props) => {
  const [movieList, setmovieList] = React.useState(null);
  React.useEffect(() => {
    axios.get("/api/Movies/").then((response) => {
      setmovieList(response.data);
    });
  }, []);

  if (!movieList) return null;
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide "
      data-ride="carousel"
    >
      <div class="carousel-inner ">
        {[...Array(Math.ceil(movieList.length / 5))].map(function (x, i) {
          console.log(i);
          return (
            <div class="carousel-item active">
              <div class="cards-wrapper">
                {movieList.slice(5 * i, 5 * (i + 1)).map(function (movie, id) {
                  return <FilmCard movie={movie} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <button
        class="carousel-control-prev "
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon prev-button"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon next-button"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MainpageCardSlider;
