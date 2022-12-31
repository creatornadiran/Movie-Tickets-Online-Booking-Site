import React, { useState } from "react";
import "./admin-menu.css";
import AddUserForm from "./AddUserForm";
import DeleteUserForm from "./DeleteUserForm";
import AddFilmForm from "./AddFilmForm";
import DeleteFilmForm from "./DeleteFilmForm";
import AddComingSoonFilmForm from "./AddComingSoonFilmForm";
import DeleteComingSoonFilmForm from "./DeleteComingSoonFilmForm";
import AddCinemaForm from "./AddCinemaForm";
import DeleteCinemaForm from "./DeleteCinemaForm";
import AddCinemaHallForm from "./AddCinemaHallForm";
import DeleteHallForm from "./DeleteHallForm";
const AdminMenu = () => {
  const [showAddUserForm, setShowAddUserForm] = useState(true);
  const [showDeleteUserForm, setShowDeleteUserForm] = useState(false);
  const [showAddFilmForm, setShowAddFilmForm] = useState(false);
  const [showDeleteFilmForm, setShowDeleteFilmForm] = useState(false);
  const [addComingSoonFilmForm, setAddComingSoonFilmForm] = useState(false);
  const [deleteComingSoonFilmForm, setDeleteComingSoonFilmForm] =
    useState(false);
  const [showAddCinemaForm, setShowAddCinemaForm] = useState(false);
  const [showDeleteCinemaForm, setShowDeleteCinemaForm] = useState(false);
  const [addCinemaHallForm, setAddCinemaHallForm] = useState(false);
  const [deleteCinemaHallForm, setDeleteCinemaHallForm] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto admin-menu">
            <li className="nav-item active">
              <a
                className="nav-link admin-menu-options"
                onClick={() => {
                  // Set showAddUserForm to true and showDeleteUserForm to false
                  setShowAddUserForm(true);
                  setShowDeleteUserForm(false);
                  setShowAddFilmForm(false);
                  setAddComingSoonFilmForm(false);
                  setShowDeleteFilmForm(false);
                  setDeleteComingSoonFilmForm(false);
                  setShowAddCinemaForm(false);
                  setShowDeleteCinemaForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                }}
              >
                Add User <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link admin-menu-options"
                onClick={() => {
                  setShowDeleteUserForm(true);
                  setShowAddUserForm(false);
                  setShowAddFilmForm(false);
                  setShowDeleteFilmForm(false);
                  setAddComingSoonFilmForm(false);
                  setDeleteComingSoonFilmForm(false);
                  setShowAddCinemaForm(false);
                  setShowDeleteCinemaForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                }}
              >
                Delete User <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link  admin-menu-options"
                onClick={() => {
                  setShowAddFilmForm(true);
                  setShowAddUserForm(false);
                  setShowDeleteUserForm(false);
                  setShowDeleteFilmForm(false);
                  setAddComingSoonFilmForm(false);
                  setDeleteComingSoonFilmForm(false);
                  setShowAddCinemaForm(false);
                  setShowDeleteCinemaForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                }}
              >
                Add Film <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link  admin-menu-options"
                onClick={() => {
                  setShowDeleteFilmForm(true);
                  setShowAddUserForm(false);
                  setShowDeleteUserForm(false);
                  setShowAddFilmForm(false);
                  setAddComingSoonFilmForm(false);
                  setDeleteComingSoonFilmForm(false);
                  setShowAddCinemaForm(false);
                  setShowDeleteCinemaForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                }}
              >
                Delete Film <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link admin-menu-options"
                onClick={() => {
                  setAddComingSoonFilmForm(true);
                  setShowDeleteFilmForm(false);
                  setShowAddUserForm(false);
                  setShowDeleteUserForm(false);
                  setShowAddFilmForm(false);
                  setDeleteComingSoonFilmForm(false);
                  setShowAddCinemaForm(false);
                  setShowDeleteCinemaForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                }}
              >
                Add Coming Soon Film
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link  admin-menu-options"
                onClick={() => {
                  setDeleteComingSoonFilmForm(true);
                  setAddComingSoonFilmForm(false);
                  setShowDeleteFilmForm(false);
                  setShowAddUserForm(false);
                  setShowDeleteUserForm(false);
                  setShowAddFilmForm(false);
                  setShowAddCinemaForm(false);
                  setShowDeleteCinemaForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                }}
              >
                Delete Coming Soon Film
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link admin-menu-options"
                onClick={() => {
                  setShowAddCinemaForm(true);
                  setDeleteComingSoonFilmForm(false);
                  setAddComingSoonFilmForm(false);
                  setShowDeleteFilmForm(false);
                  setShowAddUserForm(false);
                  setShowDeleteUserForm(false);
                  setShowAddFilmForm(false);
                  setShowDeleteCinemaForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                }}
              >
                Add Cinema
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link admin-menu-options"
                onClick={() => {
                  setShowDeleteCinemaForm(true);
                  setShowAddCinemaForm(false);
                  setDeleteComingSoonFilmForm(false);
                  setAddComingSoonFilmForm(false);
                  setShowDeleteFilmForm(false);
                  setShowAddUserForm(false);
                  setShowDeleteUserForm(false);
                  setShowAddFilmForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                }}
              >
                Delete Cinema
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link admin-menu-options"
                onClick={() => {
                  setAddCinemaHallForm(true);
                  setShowDeleteCinemaForm(false);
                  setShowAddCinemaForm(false);
                  setDeleteComingSoonFilmForm(false);
                  setAddComingSoonFilmForm(false);
                  setShowDeleteFilmForm(false);
                  setShowAddUserForm(false);
                  setShowDeleteUserForm(false);
                  setShowAddFilmForm(false);
                  setDeleteCinemaHallForm(false);
                }}
              >
                Add Hall
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link admin-menu-options"  onClick={() => {
                  setDeleteCinemaHallForm(true);
                  setAddCinemaHallForm(false);
                  setShowDeleteCinemaForm(false);
                  setShowAddCinemaForm(false);
                  setDeleteComingSoonFilmForm(false);
                  setAddComingSoonFilmForm(false);
                  setShowDeleteFilmForm(false);
                  setShowAddUserForm(false);
                  setShowDeleteUserForm(false);
                  setShowAddFilmForm(false);
                }}>Delete Hall</a>
            </li>
          </ul>
        </div>
      </nav>
      {showAddUserForm && <AddUserForm />}
      {showDeleteUserForm && <DeleteUserForm />}
      {showAddFilmForm && <AddFilmForm />}
      {showDeleteFilmForm && <DeleteFilmForm />}
      {addComingSoonFilmForm && <AddComingSoonFilmForm />}
      {deleteComingSoonFilmForm && <DeleteComingSoonFilmForm />}
      {showAddCinemaForm && <AddCinemaForm />}
      {showDeleteCinemaForm && <DeleteCinemaForm />}
      {addCinemaHallForm && <AddCinemaHallForm />}
      {deleteCinemaHallForm && <DeleteHallForm />}
    </div>
  );
};

export default AdminMenu;
