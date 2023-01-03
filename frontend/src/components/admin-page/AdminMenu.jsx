import React, { useState } from "react";
import "./admin-menu.css";
import AddMovieForm from "./AddMovieForm";
import DeleteMovieForm from "./DeleteMovieForm";
import AddCinemaForm from "./AddCinemaForm";
import DeleteCinemaForm from "./DeleteCinemaForm";
import DeleteShowForm from "./DeleteShow";
import AddCinemaHallForm from "./AddCinemaHallForm";
import DeleteHallForm from "./DeleteHallForm";
import UpdateShowForm from "./UpdateShowForm";
import UpdateMovieForm from "./UpdateMovieForm";
import LogPage from "./LogPage";
import AddShowForm from "./AddShowForm";

const AdminMenu = () => {
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);
  const [showDeleteMovieForm, setShowDeleteMovieForm] = useState(false);
  const [showAddCinemaForm, setShowAddCinemaForm] = useState(false);
  const [showDeleteCinemaForm, setShowDeleteCinemaForm] = useState(false);
  const [showDeleteShowForm, setShowDeleteShowForm] = useState(false);
  const [showCinemaHallForm, setAddCinemaHallForm] = useState(false);
  const [showDeleteCinemaHallForm, setDeleteCinemaHallForm] = useState(false);
  const [showUpdateShowForm, setshowUpdateShowForm] = useState(false);
  const [showUpdateMovieForm, setshowUpdateMovieForm] = useState(false);
  const [showLogPage, setShowLogPage] = useState(false);
  const [addShowForm, setAddShowForm] = useState(false);
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
            <li className="nav-item ">
              <a
                className="nav-link  admin-menu-options"
                onClick={() => {
                  setShowAddMovieForm(true);
                  setShowDeleteMovieForm(false);
                  setShowDeleteShowForm(false);
                  setShowAddCinemaForm(false);
                  setShowDeleteCinemaForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                  setShowLogPage(false);
                  setAddShowForm(false);
                  setshowUpdateShowForm(false);
                  setshowUpdateMovieForm(false);
                }}
              >
                Add Movie <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link  admin-menu-options"
                onClick={() => {
                  setShowDeleteMovieForm(true);
                  setShowAddMovieForm(false);
                  setShowDeleteShowForm(false);
                  setShowAddCinemaForm(false);
                  setShowDeleteCinemaForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                  setShowLogPage(false);
                  setAddShowForm(false);
                  setshowUpdateShowForm(false);
                  setshowUpdateMovieForm(false);
                }}
              >
                Delete Movie <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link  admin-menu-options"
                onClick={() => {
                  setShowDeleteMovieForm(false);
                  setShowAddMovieForm(false);
                  setShowDeleteShowForm(false);
                  setShowAddCinemaForm(false);
                  setShowDeleteCinemaForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                  setShowLogPage(false);
                  setshowUpdateShowForm(false);
                  setshowUpdateMovieForm(true);
                  setAddShowForm(false);
                }}
              >
                Update Movie <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link admin-menu-options"
                onClick={() => {
                  setShowDeleteMovieForm(false);
                  setShowAddMovieForm(false);
                  setShowDeleteShowForm(true);
                  setShowAddCinemaForm(false);
                  setShowDeleteCinemaForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                  setShowLogPage(false);
                  setshowUpdateShowForm(false);
                  setshowUpdateMovieForm(false);
                  setAddShowForm(false);
                }}
              >
                Delete Show
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link admin-menu-options"
                onClick={() => {
                  setShowDeleteMovieForm(false);
                  setShowAddMovieForm(false);
                  setShowDeleteShowForm(false);
                  setShowAddCinemaForm(false);
                  setShowDeleteCinemaForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                  setShowLogPage(false);
                  setAddShowForm(false);
                  setshowUpdateShowForm(true);
                  setshowUpdateMovieForm(false);
                }}
              >
                Update Show
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link admin-menu-options"
                onClick={() => {
                  setShowAddCinemaForm(true);
                  setShowDeleteMovieForm(false);
                  setShowDeleteShowForm(false);
                  setShowAddMovieForm(false);
                  setShowDeleteCinemaForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                  setShowLogPage(false);
                  setAddShowForm(false);
                  setshowUpdateShowForm(false);
                  setshowUpdateMovieForm(false);
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
                  setShowDeleteMovieForm(false);
                  setShowDeleteShowForm(false);
                  setShowAddMovieForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                  setShowLogPage(false);
                  setAddShowForm(false);
                  setshowUpdateShowForm(false);
                  setshowUpdateMovieForm(false);
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
                  setShowDeleteShowForm(false);
                  setShowDeleteMovieForm(false);
                  setShowAddMovieForm(false);
                  setDeleteCinemaHallForm(false);
                  setShowLogPage(false);
                  setAddShowForm(false);
                  setshowUpdateShowForm(false);
                  setshowUpdateMovieForm(false);
                }}
              >
                Add Hall
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link admin-menu-options"
                onClick={() => {
                  setDeleteCinemaHallForm(true);
                  setAddCinemaHallForm(false);
                  setShowDeleteCinemaForm(false);
                  setShowDeleteShowForm(false);
                  setShowAddCinemaForm(false);
                  setShowDeleteMovieForm(false);
                  setShowAddMovieForm(false);
                  setShowLogPage(false);
                  setAddShowForm(false);
                  setshowUpdateShowForm(false);
                  setshowUpdateMovieForm(false);
                }}
              >
                Delete Hall
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link admin-menu-options"
                onClick={() => {
                  setAddShowForm(true);
                  setShowLogPage(false);
                  setDeleteCinemaHallForm(false);
                  setAddCinemaHallForm(false);
                  setShowDeleteCinemaForm(false);
                  setShowAddCinemaForm(false);
                  setShowDeleteShowForm(false);
                  setShowDeleteMovieForm(false);
                  setShowAddMovieForm(false);
                  setshowUpdateMovieForm(false);
                  setshowUpdateShowForm(false);
                }}
              >
                Add Show
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link admin-menu-options"
                onClick={() => {
                  setShowLogPage(true);
                  setDeleteCinemaHallForm(false);
                  setAddCinemaHallForm(false);
                  setShowDeleteCinemaForm(false);
                  setShowAddCinemaForm(false);
                  setShowDeleteMovieForm(false);
                  setShowAddMovieForm(false);
                  setAddShowForm(false);
                  setshowUpdateShowForm(false);
                  setshowUpdateMovieForm(false);
                  setShowDeleteShowForm(false);
                }}
              >
                Log
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {showAddMovieForm && <AddMovieForm />}
      {showDeleteMovieForm && <DeleteMovieForm />}
      {showAddCinemaForm && <AddCinemaForm />}
      {showDeleteShowForm && <DeleteShowForm />}
      {showDeleteCinemaForm && <DeleteCinemaForm />}
      {showCinemaHallForm && <AddCinemaHallForm />}
      {showDeleteCinemaHallForm && <DeleteHallForm />}
      {showUpdateShowForm && <UpdateShowForm />}
      {showUpdateMovieForm && <UpdateMovieForm />}
      {showLogPage && <LogPage />}
      {addShowForm && <AddShowForm />}
    </div>
  );
};

export default AdminMenu;
