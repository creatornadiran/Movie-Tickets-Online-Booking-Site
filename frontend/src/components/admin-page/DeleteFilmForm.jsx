import React, { useState } from "react";
import axios from "axios";

function DeleteFilmForm(props) {
  const [movieId, setMovieId] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);

  function handleChange(event) {
    setMovieId(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .delete(`/api/Movies/${movieId}/`)
      .then((response) => {
        console.log(response);
        setIsDeleted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Movie ID:
          <input type="text" value={movieId} onChange={handleChange} />
        </label>
        <button type="submit">Delete Movie</button>
      </form>
      {isDeleted && <p>Movie successfully deleted!</p>}
    </div>
  );
}

export default DeleteFilmForm;
