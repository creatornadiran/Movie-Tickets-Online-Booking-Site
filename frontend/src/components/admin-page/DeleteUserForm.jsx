import React from 'react'

const DeleteUserForm = () => {
  return (
    <div>
      <form>
  <div className="form-group add-user-form">
    <label for="formGroupExampleInput">Enter the username of the user you want to delete</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
  </div>
  <div className="form-group">
    <label for="formGroupExampleInput2">Enter the password of the user you want to delete</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
</form>
    </div>
  )
}

export default DeleteUserForm
