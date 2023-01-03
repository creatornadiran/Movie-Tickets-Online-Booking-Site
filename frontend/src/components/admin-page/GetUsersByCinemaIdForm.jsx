import React, { useState } from "react";
import axios from "axios";

function GetUsersByCinemaIdForm() {
  const [CinemaId, setCinemaId] = useState("");
  const [isRetrieved, setIsRetrieved] = useState(false);
  const [users, setUsers] = useState(null);
  function handleChange(event) {
    setCinemaId(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get(`getUsersByCinemaId/${CinemaId}`)
      .then((response) => {
        setUsers(response.data);
        setIsRetrieved(true);
      })
      .catch((error) => {
        setIsRetrieved(false);
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
        <button type="submit">Retrieve Users</button>
      </form>
      {isRetrieved ? (
        users ? (
          <ul>
            {users.map((user) => (
              <li key={users.id}>User ID {user.id}</li>
            ))}
          </ul>
        ) : (
          <p>There is no users for this cinema.</p>
        )
      ) : null}
    </div>
  );
}

export default GetUsersByCinemaIdForm;
