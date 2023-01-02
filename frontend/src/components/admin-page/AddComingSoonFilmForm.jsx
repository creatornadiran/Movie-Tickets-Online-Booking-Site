import axios from "axios";
import { useState } from "react";
const AddComingSoonFilmForm = () => {
  const [poster, setPoster] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [actors, setActors] = useState("");
  const [name, setName] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [language, setLanguage] = useState("");
  const [about, setAbout] = useState("");
  const [score, setScore] = useState("");
  const [inTheatre, setIntheatre] = useState("false");
  let handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      poster: poster,
      genre: genre,
      date: date,
      end_date: end_date,
      actors: actors,
      name: name,
      director: director,
      duration: duration,
      language: language,
      about: about,
      score: score,
      inTheatre:inTheatre
      
    };
    axios
      .post("http://127.0.0.1:8000/api/MovieComingSoon/", data)
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
            value={end_date}
            onChange={(e) => setEnd_date(e.target.value)}
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
          <label for="formGroupExampleInput2">Enter about movie</label>
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
        <button
          className="btn btn-outline-success form-submit-button "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddComingSoonFilmForm;
