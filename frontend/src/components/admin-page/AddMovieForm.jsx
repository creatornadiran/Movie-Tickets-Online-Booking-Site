import { useState } from "react";
import axios from "axios";

const AddMovieForm = () => {
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
  const [inTheatre, setInTheatre] = useState(true);

  let handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
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
    };
    axios
      .post("http://127.0.0.1:8000/api/Movies/", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form className="admin-forms" onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter movie poster</label>
          <input
            type="text"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter movie genre</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter movie date </label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter movie end date </label>
          <input
            type="text"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter movie actors</label>
          <input
            type="text"
            value={actors}
            onChange={(e) => setActors(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter movie name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter movie director</label>
          <input
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter movie duration</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter movie language</label>
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter movie summary</label>
          <input
            type="text"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter movie score</label>
          <input
            type="text"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="inTheatre"
            checked={inTheatre}
            onChange={(e) => setInTheatre(e.target.checked)}
          />
          <label className="form-check-label" for="inTheatre">
            Currently in theatre?
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Add movie
        </button>
      </form>
    </div>
  );
};

export default AddMovieForm;
