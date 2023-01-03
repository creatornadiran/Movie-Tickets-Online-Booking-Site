import React, { useState } from "react";
import axios from "axios";

function DeleteShowForm(props) {
  const [ShowId, setShowId] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);

  function handleChange(event) {
    setShowId(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .delete(`/api/ShowViews/${ShowId}/`)
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
      <form  className="admin-forms" onSubmit={handleSubmit}>
        <label>
          Show ID:
          <input type="text" value={ShowId} onChange={handleChange} />
        </label>
        <div><button className="delete-cinema" type="submit">Delete Show</button></div>
        
      </form>
      {isDeleted && <p>Show successfully deleted!</p>}
    </div>
  );
}

export default DeleteShowForm;
