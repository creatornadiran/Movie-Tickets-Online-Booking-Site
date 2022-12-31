import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./sign-up.css";
import axios from "axios";
import React from "react";

const Signup = () => {
  const [errorText, setErrorText] = React.useState("");
  React.useEffect(() => {
    if (errorText === "Your account has been successfully created")
      document.getElementById("form").reset();
  }, [errorText]);
  function postData(e) {
    e.preventDefault();
    const data = new FormData(document.getElementById("form"));
    const pass1 = data.get("password");
    const pass2 = data.get("password2");
    if (pass1 !== pass2) {
      setErrorText("Passwords do not match");
      return;
    }
    axios
      .post("/register/", data)
      .then((response) => {
        setErrorText("Your account has been successfully created");
      })
      .catch((error) => {
        setErrorText("You already have an account.");
      });
  }
  return (
    <div className="signup">
      <img src={logo} alt="Logo" className="nav--iconx" />
      <h1 className="text-center">Welcome to Cinemium!</h1>
      <form id="form" onSubmit={postData}>
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account!</p>
        <hr />
        <p className="error-text">{errorText}</p>
        <label form="username">Username:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          pattern="[A-Za-z0-9]{1,25}"
          title="Please enter a title that contains only uppercase and lowercase letters, digits, and has a length of 1 to 25 characters."
          required
        />
        <br />
        <label form="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z]).{8,}"
          title="Password must contain at least one digit and one lowercase letter, and be at least 8 characters long."
          required
        />
        <br />
        <label form="password2">Confirm Password:</label>
        <br />
        <input
          type="password"
          id="password2"
          name="password2"
          pattern="(?=.*\d)(?=.*[a-z]).{8,}"
          title="Password must contain at least one digit and one lowercase letter, and be at least 8 characters long."
          required
        />
        <br />
        <label form="email">Email:</label>
        <br />
        <input
          type="text"
          id="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Please enter a valid email address"
          required
        />
        <br />
        <label form="first_name">First name:</label>
        <br />
        <input type="text" id="first_name" name="first_name" required />
        <br />
        <label form="last_name">Last name:</label>
        <br />
        <input type="text" id="last_name" name="last_name" required />
        <br />
        <input type="checkbox" id="terms" name="terms" required />{" "}
        <label form="terms">I accept the terms</label>
        <br />
        <input className="btn btn-success w-100" type="submit" value="submit" />
      </form>
      <div className="text-center alreadyhave">
        Already have an account? <a href="/log-in">Login here</a>
      </div>
    </div>
  );
};

export default Signup;
