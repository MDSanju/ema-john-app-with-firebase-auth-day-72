import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle, error, setError } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.form || "/shop";

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_url);
      })
      .catch((error) => {
        setError("Cancelled popup request");
      });
  };
  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="Write your email" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Put your password"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          new to ema-john? <Link to="/register">Create Account</Link>
        </p>
        <div>--------or--------</div>
        <br />
        <button
          onClick={handleGoogleLogin}
          type="submit"
          className="btn-regular"
        >
          Google Sign In
        </button>
        <br />
        <p style={{ color: "red" }}>{error}</p>
      </div>
    </div>
  );
};

export default Login;
