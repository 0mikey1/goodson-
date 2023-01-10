import React from "react";
import "../styles/login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="col">
          <div className="row">
            <div className="col-5"></div>
            <div className="col">
              <form className="loginForm">
                <div className="form-group">
                  <label
                    className="text-white fw-bold fs-6 text text-center"
                    for="exampleInputEmail1"
                  >
                    {" "}
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  ></input>
                </div>
                <div class="form-group">
                  <label
                    className="text-white fs-6 fw-bold text-center"
                    for="exampleInputPassword1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  ></input>
                </div>
                <div className="button" align="center">
                  <button type="submit" className="btn btn-primary mt-2">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
