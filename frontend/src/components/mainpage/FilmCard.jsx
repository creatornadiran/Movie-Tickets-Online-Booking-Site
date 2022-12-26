import React from "react";
import "./mainpage-card-slider.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  const toMovie = (movie) => {
    if (movie === undefined) return;
    navigate(`/film-details/${movie.name}`, {
      state: {
        id: movie.id,
        name: movie.name,
        img: require("../../assets/images/posters/" + movie.poster + ".jpg"),
        score: movie.score,
        tags: movie.genre,
        about: movie.about,
        actors: movie.actors,
        duration: movie.duration,
        director: movie.director,
      },
    });
  };
  return (
    <div class="card d-none d-md-block">
      <img
        src={require("../../assets/images/posters/" +
          props.movie.poster +
          ".jpg")}
        alt="Slide"
        class="card-img-top"
      />
      <div class="card-body">
        <h5 class="card-title">{props.movie.name}</h5>
        <a
          onClick={() => {
            toMovie(props.movie);
          }}
          class="btn btn-primary"
        >
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
