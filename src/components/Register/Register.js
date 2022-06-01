import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { signInUsingGoogle, error } = useAuth();
  return (
    <div className="login-form">
      <div>
        <h2>Create Account</h2>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="Write your email" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Put your password"
          />{" "}
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Re-enter password"
          />
          <br />
          <input type="submit" value="Submit" /> <br />
        </form>
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
        <br />
        <div>--------or--------</div>
        <br />
        <button
          onClick={signInUsingGoogle}
          className="btn-regular"
          type="submit"
        >
          Google Sign In
        </button>
        <br />
        <p style={{ color: "red" }}>{error}</p>
      </div>
    </div>
  );
};

export default Register;
