import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authenticated } from "../store";

const LoginForm = () => {
  const [auth, setAuth] = useRecoilState(authenticated);

  const redirect = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const record = { email, password };

  // const getMe = async () => {
  //   try {
  //     let response = await axios.get("/me", {
  //       headers: {
  //         Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  //       },
  //     });

  //     setAuth({ login: true, user: response.data });
  //     return true;
  //   } catch (e) {
  //     setAuth({ login: false, user: [] });
  //     return false;
  //   }
  // };

  const submitHanlder = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("/login", record);

      sessionStorage.setItem("token", response.data.access_token);
      setAuth({ login: true, user: response.data.user });

      redirect("/");
      //   console.log(response.data);
    } catch (e) {
      if (e.response) {
        setErrors(e.response.data);
      }

      //   console.log(e.response.data);
    }
  };

  useEffect(() => {
    if (auth.login) {
      redirect("/");
    }
  });

  return (
    <div className="col-md-5 offset-md-3 mt-5">
      <div className="card">
        <div className="card-header">
          <h2>Login</h2>
        </div>
        <div className="card-body">
          <div className="mb-5 text-muted">
            <h6>Login users</h6>
          </div>
          <div className="mb-5 col-md-12">
            <form onSubmit={submitHanlder}>
              <div className="mb-4">
                <label htmlFor="e-mail" className="form-label">
                  E-Mail
                </label>
                <input
                  className={`form-control mb-1 ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  id="e-mail"
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email ? (
                  <div className="invalid-feedback">{errors.email[0]}</div>
                ) : (
                  ""
                )}
              </div>
              <div>
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  className={`form-control mb-1 ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password ? (
                  <div className="text-danger">{errors.password[0]}</div>
                ) : (
                  ""
                )}
              </div>
              <button type="submit" className="btn btn-primary float-end mt-5">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
