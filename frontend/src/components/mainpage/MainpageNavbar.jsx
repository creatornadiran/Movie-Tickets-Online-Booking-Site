import logo from "../../assets/images/logo.png";
import signIn from "../../assets/images/signIn.jpg";
import signUp from "../../assets/images/signUp.png";
import "./mainpage-navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar my-navbar">
      <div className="container-fluid">
        <button onclick="myFunction()">
          {" "}
          <img src={signIn} alt="Logo" className="enter" />
        </button>
        <a className="navbar-brand text" href="#">
          Sign In
        </a>
        <button onclick="myFunction()">
          {" "}
          <img src={signUp} alt="Logo" className="enter" />
        </button>
        <a className="navbar-brand text" href="#">
          Sign Up
        </a>
        <img src={logo} alt="Logo" className="nav--icon" />
        <form class="d-flex my-button" role="search">
          <input
            class="form-control me-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success " type="submit">
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
          tabindex="-1"
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
                <a className="nav-link active" aria-current="page" href="#">
                  Movies In Theaters
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Coming Soon
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cinemas
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
            <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
