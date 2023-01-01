const AddComingSoonFilmForm = () => {
  return (
    <div>
      <form className="admin-forms">
        <div className="form-group">
          <label for="formGroupExampleInput">Enter movie id</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter movie poster</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter movie genre</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter movie date </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter movie actors</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter movie name</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter movie director</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter movie duration</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter movie language</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter about movie</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Enter movie score</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            In Theatre
          </label>
        </div>
      </form>
      <button className="btn btn-outline-success form-submit-button " type="submit">
        Submit
      </button>
    </div>
  );
};

export default AddComingSoonFilmForm;
