const DeleteComingSoonFilmForm = () => {
  return (
    <div>
      <form className="admin-forms">
        <div className="form-group">
          <label for="formGroupExampleInput">Enter movie id that you want to delete</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
          />
        </div>
      </form>
      <button className="btn btn-outline-success form-submit-button " type="submit">
        Submit
      </button>
    </div>
  );
};

export default DeleteComingSoonFilmForm;
