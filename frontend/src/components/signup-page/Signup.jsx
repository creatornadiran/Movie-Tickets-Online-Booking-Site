import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./sign-up.css";
import axios from "axios";

const Signup = () => {
  function postData() {
    console.log("asdas");
    const data = new FormData(document.getElementById("form"));
    axios
      .post("/api/UserViews/", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    toHome();
  }
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };
  const toLogin = () => {
    navigate("/log-in");
  };
  return (
    <div className="signup">
      <img src={logo} alt="Logo" className="nav--iconx" />
      <h1 className="text-center">Welcome to Cinemium!</h1>
      <form id="form" onSubmit={postData}>
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account!</p>
        <hr />
        <label form="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          pattern="[A-Za-z\s]+"
          required
        />
        <br />

        <label form="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        />
        <br />

        <label form="user_name">Username:</label>
        <br />
        <input
          type="text"
          id="user_name"
          name="user_name"
          pattern="\d+"
          required
        />
        <br />

        <label form="password">Password:</label>
        <br />
        <input type="password" id="password" name="password" required />
        <br />

        <label form="phone">Phone:</label>
        <br />
        <input
          type="text"
          id="phone"
          name="phone"
          pattern="[0-9]{10}"
          required
        />
        <br />

        <input type="checkbox" id="terms" name="terms" required />
        <label form="terms">I accept the terms</label>
        <br />

        <input className="btn btn-success w-100" type="submit" value="submit" />
      </form>
      <div className="text-center alreadyhave">
        Already have an account?{" "}
        <a onClick={toLogin} href="#">
          Login here
        </a>
      </div>
    </div>
  );
};

export default Signup;
