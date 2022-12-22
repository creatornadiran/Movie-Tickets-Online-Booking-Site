import logo from "../../assets/images/logo.png";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import {FaHome} from "react-icons/fa";
const Navbar = () => {
  const navigate = useNavigate();
  const toLogin = () => {
    
    navigate('/log-in');
  };

  const toSignup = () => {
    
    navigate('/sign-up');
  };
  const toHome = () => {
    
    navigate('/');
  };
  return (
    <nav className="navbar my-navbar">
      <div className="container-fluid">
        <button className="btn btn-outline-success " type="submit" onClick={toLogin}>
          Log In
        </button>
        <button className="btn btn-outline-success signIn " type="submit" onClick={toSignup}>
          Sign Up
        </button>
        <img src={logo} alt="Logo" className="nav--icon" />
        <div className="iconn">
            <FaHome size={30} color="#373e98" onClick={toHome}/>
          </div>
        <form className="d-flex my-button" role="search">
          <input
            className="form-control me-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success " type="submit">
            Search
          </button>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Cinemium
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                 Log In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Campaigns
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Return Transactions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
