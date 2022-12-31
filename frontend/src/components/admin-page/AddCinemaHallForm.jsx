const AddCinemaHallForm = () => {
  return (
    <div>
      <form>
        <div className="form-group add-user-form">
          <label for="formGroupExampleInput">Enter cinema hall id</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example input"
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
            placeholder="Another input"
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
            placeholder="Another input"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCinemaHallForm;
