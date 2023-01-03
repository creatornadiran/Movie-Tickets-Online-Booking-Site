import React, { useState } from "react";
import axios from "axios";
const UpdateShowForm = () => {
  const [showId, setShowId] = useState("");
  const [date, setDate] = useState("");
  const [cinemaHall, setCinemaHall] = useState("");
  const [movie, setMovie] = useState("");
  const [showPrice, setShowPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/ShowViews/${showId}/`, {
        date: date,
        cinema_hall: cinemaHall,
        movie: movie,
        show_price: showPrice,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Show ID:
        <input
          type="text"
          value={showId}
          onChange={(e) => setShowId(e.target.value)}
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
        Cinema Hall:
        <input
          type="text"
          value={cinemaHall}
          onChange={(e) => setCinemaHall(e.target.value)}
        />
      </label>
      <br />
      <label>
        Movie:
        <input
          type="text"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />
      </label>
      <br />
      <label>
        Show Price:
        <input
          type="text"
          value={showPrice}
          onChange={(e) => setShowPrice(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Update Show</button>
    </form>
  );
};

export default UpdateShowForm;
