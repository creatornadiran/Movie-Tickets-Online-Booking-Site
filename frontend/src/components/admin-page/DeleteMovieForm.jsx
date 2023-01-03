import React, { useState } from "react";
import axios from "axios";

function DeleteMovieForm(props) {
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
      <form className="admin-forms" onSubmit={handleSubmit}>
        <label>
          Movie ID:
          <input type="text" value={movieId} onChange={handleChange} />
        </label>
        <div>
          {" "}
          <button type="submit" className="btn btn-primary delete-cinema">
            Delete Movie
          </button>
        </div>
      </form>
      {isDeleted && <p>Movie successfully deleted!</p>}
    </div>
  );
}

export default DeleteMovieForm;
