import React, { useState } from "react";
import { Link } from "react-router-dom";

import useFetch from "../../hooks/useFetch";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ isLoading, error, response }, doFetch] = useFetch("/users/login");

  const handleSubmit = e => {
    e.preventDefault();
    doFetch({
      method: "post",
      data: {
        user: {
          email: "test@example.com",
          password: "123"
        }
      }
    });
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link to="/signup">Need an account?</Link>
            </p>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  ></input>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  ></input>
                </fieldset>
                <button
                  disabled={isLoading}
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  Sign in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
