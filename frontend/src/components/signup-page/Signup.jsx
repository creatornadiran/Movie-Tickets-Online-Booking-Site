import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./sign-up.css";
import axios from "axios";

const Signup = () => {
  function postData() {
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
    <div class="signup">
      <img src={logo} alt="Logo" className="nav--iconx" />
      <h1 class="text-center">Welcome to Cinemium!</h1>
      <form id="form">
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account!</p>
        <hr />
        <label for="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          pattern="[A-Za-z\s]+"
          required
        />
        <br />

        <label for="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        />
        <br />

        <label for="user_name">Username:</label>
        <br />
        <input
          type="text"
          id="user_name"
          name="user_name"
          pattern="\d+"
          required
        />
        <br />

        <label for="password">Password:</label>
        <br />
        <input type="password" id="password" name="password" required />
        <br />

        <label for="phone">Phone:</label>
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
        <label for="terms">I accept the terms</label>
        <br />

        <input
          class="btn btn-success w-100"
          type="submit"
          value="SIGN UP"
          onClick={postData}
        />
      </form>
      <div class="text-center alreadyhave">
        Already have an account?{" "}
        <a onClick={toLogin} href="#">
          Login here
        </a>
      </div>
    </div>
  );
};

export default Signup;
