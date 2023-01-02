import React, { useState } from "react";
import axios from "axios";

function DeleteHallForm(props) {
  const [hallId, setHallId] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);

  function handleChange(event) {
    setHallId(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .delete(`/api/CinemaHalls/${hallId}/`)
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
          Hall ID:
          <input type="text" value={hallId} onChange={handleChange} />
        </label>
        <button type="submit">Delete Hall</button>
      </form>
      {isDeleted && <p>Hall successfully deleted!</p>}
    </div>
  );
}

export default DeleteHallForm;
