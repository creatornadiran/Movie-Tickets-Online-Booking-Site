const AddCinemaHallForm = () => {
  return (
    <div>
      <form className="admin-forms">
        <div className="form-group">
          <label for="formGroupExampleInput">Enter cinema hall id</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">
            Enter the total number of seats for the hall you want to add
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">
            Enter the id of the cinema to which the cinema_hall you want to add
            belongs
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
          />
        </div>
      </form>
      <button className="btn btn-outline-success form-submit-button " type="submit">
        Submit
      </button>
    </div>
  );
};

export default AddCinemaHallForm;
