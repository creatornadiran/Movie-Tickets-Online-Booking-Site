import React, { useState } from "react";
import axios from "axios";

const UpdateMovie = () => {
  const [movieId, setMovieId] = useState("");
  const [poster, setPoster] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [actors, setActors] = useState("");
  const [name, setName] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [language, setLanguage] = useState("");
  const [about, setAbout] = useState("");
  const [score, setScore] = useState("");
  const [inTheatre, setInTheatre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/Movies/${movieId}/`, {
        poster: poster,
        genre: genre,
        date: date,
        end_date: endDate,
        actors: actors,
        name: name,
        director: director,
        duration: duration,
        language: language,
        about: about,
        score: score,
        in_theatre: inTheatre,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Movie ID:
        <input
          type="text"
          value={movieId}
          onChange={(e) => setMovieId(e.target.value)}
        />
      </label>
      <br />
      <label>
        Poster:
        <input
          type="text"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />
      </label>
      <br />
      <label>
        Genre:
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        End Date:
        <input
          type="text"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Actors:
        <input
          type="text"
          value={actors}
          onChange={(e) => setActors(e.target.value)}
        />
      </label>
      <br />
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Director:
        <input
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
      </label>
      <br />
      <label>
        Duration:
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </label>
      <br />
      <label>
        Language:
        <input
          type="text"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
      </label>
      <br />
      <label>
        About:
        <input
          type="text"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      </label>
      <br />
      <label>
        Score:
        <input
          type="text"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
      </label>
      <br />
      <label>
        In Theatre:
        <input
          type="text"
          value={inTheatre}
          onChange={(e) => setInTheatre(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Update Movie</button>
    </form>
  );
};

export default UpdateMovie;
