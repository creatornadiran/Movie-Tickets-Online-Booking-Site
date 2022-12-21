import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./sign-up.css";
const Signup = () => {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };
  return (
    <div class="signup">
        <img src={logo} alt="Logo" className="nav--iconx" />
      <h1 class="text-center">Welcome to Cinemium!</h1>
      <form action="/examples/actions/confirmation.php" method="post">
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account!</p>
        <hr />
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-addon">
              <i class="fa fa-user"></i>
            </span>
            <input
              type="text"
              class="form-control"
              name="username"
              placeholder="Username"
              required="required"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-addon">
              <i class="fa fa-paper-plane"></i>
            </span>
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Email Address"
              required="required"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-addon">
              <i class="fa fa-lock"></i>
            </span>
            <input
              type="text"
              class="form-control"
              name="password"
              placeholder="Password"
              required="required"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-addon">
              <i class="fa fa-lock"></i>
              <i class="fa fa-check"></i>
            </span>
            <input
              type="text"
              class="form-control"
              name="confirm_password"
              placeholder="Confirm Password"
              required="required"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="checkbox-inline">
            <input type="checkbox" required="required" /> I accept the{" "}
            <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
          </label>
        </div>
        <input
          class="btn btn-success w-100"
          type="submit"
          value="SIGN UP"
          onClick={toHome}
        />
      </form>
      <div class="text-center">
        Already have an account? <a href="#">Login here</a>
      </div>
    </div>
  );
};

export default Signup;
