import React from "react";
import "./mainpage-card-slider.css";
import { useNavigate } from "react-router-dom";

const FilmCard = (props) => {
  const navigate = useNavigate();
  const toMovie = (movie) => {
    if (movie === undefined) return;
    navigate(`/film-details/${movie.name}`, {
      state: {
        movie_id: movie.movie_id,
        name: movie.name,
        img: require("../../assets/images/posters/" + movie.poster + ".jpg"),
        score: movie.score,
        tags: movie.genre,
        about: movie.about,
        actors: movie.actors,
        duration: movie.duration,
        director: movie.director,
        in_theatre: movie.in_theatre,
        date: movie.date,
      },
    });
  };
  return (
    <div className="card d-none d-md-block">
      <img
        src={require("../../assets/images/posters/" +
          props.movie.poster +
          ".jpg")}
        alt="Slide"
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{props.movie.name}</h5>
        <a
          onClick={() => {
            toMovie(props.movie);
          }}
          className="btn btn-primary"
        >
          Go to film page
        </a>
      </div>
    </div>
  );
};

export default FilmCard;
