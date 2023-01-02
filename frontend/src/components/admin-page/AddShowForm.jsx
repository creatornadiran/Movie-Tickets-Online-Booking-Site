import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const AddShowForm = () => {
    const [date, setDate] = useState("");
    const [show_price, setShow_price] = useState("");
    const [cinema_hall, setCinema_hall] = useState("");
    const [movie, setMovie] = useState("");
    let handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
       date:date,
       show_price:show_price,
       cinema_hall:cinema_hall,
       movie:movie
        
      };
      axios
        .post("http://127.0.0.1:8000/api/ShowViews/", data)
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
          <label for="formGroupExampleInput2">Enter show date</label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2"> Enter show price</label>
          <input
            type="text"
            value={show_price}
            onChange={(e) => setShow_price(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2"> Enter cinema hall </label>
          <input
            type="text"
            value={cinema_hall}
            onChange={(e) => setCinema_hall(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2"> Enter movie id </label>
          <input
            type="text"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-outline-success form-submit-button " type="submit">
        Submit
      </button>
      </form>
    </div>
  )
}

export default AddShowForm;