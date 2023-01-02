import logo from "../../assets/images/logo.png";
import "./login-page.css";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LOGIN_URL = "/auth";

const Login = () => {
  const { user, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return user ? (
    <h1>You are already logged in.</h1>
  ) : (
    <div className="logindiv">
      <h6>Welcome!</h6>
      <form onSubmit={loginUser}>
        <input
          className="form-control formm"
          type="text"
          name="username"
          placeholder="Enter Username"
        />
        <input
          className="form-control formm"
          type="password"
          name="password"
          placeholder="Enter Password"
        />
        <input
          className="btn btn-success form-control formm"
          type="submit"
          value="submit"
        />
      </form>
    </div>
  );
};

export default Login;
