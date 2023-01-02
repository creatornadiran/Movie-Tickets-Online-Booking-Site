import React, { useState } from "react";
import axios from "axios";

function DeleteCinemaForm(props) {
  const [CinemaId, setCinemaId] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);

  function handleChange(event) {
    setCinemaId(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .delete(`/api/Cinemas/${CinemaId}/`)
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
          Cinema ID:
          <input type="text" value={CinemaId} onChange={handleChange} />
        </label>
        <button type="submit">Delete Cinema</button>
      </form>
      {isDeleted && <p>Cinema successfully deleted!</p>}
    </div>
  );
}

export default DeleteCinemaForm;
