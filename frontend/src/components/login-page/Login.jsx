import logo from "../../assets/images/logo.png";
import "./login-page.css";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LOGIN_URL = "/auth";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      <form onSubmit={loginUser}>
        <input type="text" name="username" placeholder="Enter Username" />
        <input type="password" name="password" placeholder="Enter Password" />
        <input className="btn btn-success w-100" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Login;
