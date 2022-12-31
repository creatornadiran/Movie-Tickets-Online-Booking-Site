const AddCinemaForm = () => {
  return (
    <div>
      <form>
        <div className="form-group add-user-form">
          <label for="formGroupExampleInput">Enter cinema id</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example input"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter cinema name</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">
            Enter the district where the cinema is
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
            Enter the city where the cinema is
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
            Enter the zipcode where the cinema is
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

export default AddCinemaForm;
