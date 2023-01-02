import React, { useState } from "react";
import "./admin-menu.css";
import AddFilmForm from "./AddFilmForm";
import DeleteFilmForm from "./DeleteFilmForm";
import AddComingSoonFilmForm from "./AddComingSoonFilmForm";
import AddCinemaForm from "./AddCinemaForm";
import DeleteCinemaForm from "./DeleteCinemaForm";
import DeleteShowForm from "./DeleteShow";
import AddCinemaHallForm from "./AddCinemaHallForm";
import DeleteHallForm from "./DeleteHallForm";
import LogPage from "./LogPage";
const AdminMenu = () => {
  const [showAddFilmForm, setShowAddFilmForm] = useState(false);
  const [showDeleteFilmForm, setShowDeleteFilmForm] = useState(false);
  const [addComingSoonFilmForm, setAddComingSoonFilmForm] = useState(false);
  const [showAddCinemaForm, setShowAddCinemaForm] = useState(false);
  const [showDeleteCinemaForm, setShowDeleteCinemaForm] = useState(false);
  const [showDeleteShowForm, setShowDeleteShowForm] = useState(false);
  const [addCinemaHallForm, setAddCinemaHallForm] = useState(false);
  const [deleteCinemaHallForm, setDeleteCinemaHallForm] = useState(false);
  const [showLogPage, setShowLogPage] = useState(false);
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
                  setShowAddFilmForm(true);
                  setShowDeleteFilmForm(false);
                  setAddComingSoonFilmForm(false);
                  setShowDeleteShowForm(false);
                  setShowAddCinemaForm(false);
                  setShowDeleteCinemaForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                  setShowLogPage(false);
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
                  setShowAddFilmForm(false);
                  setAddComingSoonFilmForm(false);
                  setShowDeleteShowForm(false);
                  setShowAddCinemaForm(false);
                  setShowDeleteCinemaForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                  setShowLogPage(false);
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
                  setShowAddFilmForm(false);
                  setShowAddCinemaForm(false);
                  setShowDeleteShowForm(false);
                  setShowDeleteCinemaForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                  setShowLogPage(false);
                }}
              >
                Add Coming Soon Film
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link admin-menu-options"
                onClick={() => {
                  setAddComingSoonFilmForm(false);
                  setShowDeleteFilmForm(false);
                  setShowAddFilmForm(false);
                  setShowDeleteShowForm(true);
                  setShowAddCinemaForm(false);
                  setShowDeleteCinemaForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                  setShowLogPage(false);
                }}
              >
                Delete Show
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link admin-menu-options"
                onClick={() => {
                  setShowAddCinemaForm(true);
                  setAddComingSoonFilmForm(false);
                  setShowDeleteFilmForm(false);
                  setShowDeleteShowForm(false);
                  setShowAddFilmForm(false);
                  setShowDeleteCinemaForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                  setShowLogPage(false);
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
                  setAddComingSoonFilmForm(false);
                  setShowDeleteFilmForm(false);
                  setShowDeleteShowForm(false);
                  setShowAddFilmForm(false);
                  setAddCinemaHallForm(false);
                  setDeleteCinemaHallForm(false);
                  setShowLogPage(false);
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
                  setAddComingSoonFilmForm(false);
                  setShowDeleteShowForm(false);
                  setShowDeleteFilmForm(false);
                  setShowAddFilmForm(false);
                  setDeleteCinemaHallForm(false);
                  setShowLogPage(false);
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
                  setAddComingSoonFilmForm(false);
                  setShowDeleteFilmForm(false);
                  setShowAddFilmForm(false);
                  setShowLogPage(false);
                }}
              >
                Delete Hall
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
                  setShowDeleteShowForm(false);
                  setAddComingSoonFilmForm(false);
                  setShowDeleteFilmForm(false);
                  setShowAddFilmForm(false);
                }}
              >
                Log
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {showAddFilmForm && <AddFilmForm />}
      {showDeleteFilmForm && <DeleteFilmForm />}
      {addComingSoonFilmForm && <AddComingSoonFilmForm />}
      {showAddCinemaForm && <AddCinemaForm />}
      {showDeleteShowForm && <DeleteShowForm />}
      {showDeleteCinemaForm && <DeleteCinemaForm />}
      {addCinemaHallForm && <AddCinemaHallForm />}
      {deleteCinemaHallForm && <DeleteHallForm />}
      {showLogPage && <LogPage />}
    </div>
  );
};

export default AdminMenu;
