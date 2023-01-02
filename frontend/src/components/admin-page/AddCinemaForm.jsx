import axios from "axios";
import { useState } from "react";
const AddCinemaForm = () => {
  const [name, setName] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [zip_code, setZip_code] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
     name:name,
     district:district,
     city:city,
     zip_code:zip_code
      
    };
    axios
      .post("http://127.0.0.1:8000/api/Cinemas/", data)
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
          <label for="formGroupExampleInput2">Enter cinema name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2"> Enter the district where the cinema is</label>
          <input
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2"> Enter the city where the cinema is </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2"> Enter the zipcode where the cinema is </label>
          <input
            type="text"
            value={zip_code}
            onChange={(e) => setZip_code(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-outline-success form-submit-button " type="submit">
        Submit
      </button>
      </form>
      
    </div>
  );
};

export default AddCinemaForm;
