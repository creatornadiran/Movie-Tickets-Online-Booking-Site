import logo from "../../assets/images/logo.png";
import "./login-page.css";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };
  return (
    
    <div >
      <img src={logo} alt="Logo" className="nav--iconn" />
      <h1 class="text-center">Log in to Cinemium</h1>

      <form class="needs-validation login">
        <div class="form-group was-validated">
          <label class="form-label" for="email">
            Email address
          </label>
          <input class="form-control" type="email" id="email" required />
          <div class="invalid-feedback">Please enter your email address</div>
        </div>
        <div class="form-group was-validated">
          <label class="form-label" for="password">
            Password
          </label>
          <input class="form-control" type="password" id="password" required />
          <div class="invalid-feedback">Please enter your password</div>
        </div>
        <div class="form-group form-check">
          <input class="form-check-input" type="checkbox" id="check" />
          <label class="form-check-label" for="check">
            Remember me
          </label>
        </div>
        <input
          class="btn btn-success w-100"
          type="submit"
          value="SIGN IN"
          onClick={toHome}
        />
      </form>
    </div>
  );
};

export default Login;
