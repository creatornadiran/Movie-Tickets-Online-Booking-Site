import { useState } from "react";
import axios from "axios";
const AddCinemaHallForm = () => {
  const [hall_size, setHall_size] = useState("");
  const [cinema, setCinema] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      hall_size: hall_size,
      cinema: cinema,
    };
    axios
      .post("http://127.0.0.1:8000/api/CinemaHalls/", data)
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
          <label for="formGroupExampleInput2">Enter the hall size</label>
          <input
            type="text"
            value={hall_size}
            placeholder="Name"
            onChange={(e) => setHall_size(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">
            Enter the id of the cinema to which the cinema_hall you want to add
            belongs
          </label>
          <input
            type="text"
            value={cinema}
            placeholder="Name"
            onChange={(e) => setCinema(e.target.value)}
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

export default AddCinemaHallForm;
