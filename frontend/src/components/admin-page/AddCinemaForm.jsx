const AddCinemaForm = () => {
  return (
    <div>
      <form className="admin-forms">
        <div className="form-group">
          <label for="formGroupExampleInput">Enter cinema id</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter cinema name</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
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
          
          />
        </div>
        <div className="form-group ">
          <label for="formGroupExampleInput2">
            Enter the zipcode where the cinema is
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

export default AddCinemaForm;
