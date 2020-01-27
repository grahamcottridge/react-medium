import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CurrentUserContext } from "../../contexts/currentUser";

const Authentication = props => {
  const isSignIn = props.match.path === "/signin";
  const pageTitle = isSignIn ? "Sign In" : "Sign Up";
  const descriptionLink = isSignIn ? "/signup" : "/signout";
  const descriptionText = isSignIn ? "Need an account?" : "Have an account?";
  const apiUrl = isSignIn ? "/users/signin" : "/users";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isSuccessfullSubmit, setisSuccessfullSubmit] = useState(false);
  const [{ isLoading, response }, doFetch] = useFetch(apiUrl);
  const [token, setToken] = useLocalStorage("token");
  const [currentUserState, setCurrentUserState] = useContext(
    CurrentUserContext
  );
  console.log("token", token);

  const handleSubmit = e => {
    e.preventDefault();
    const user = isSignIn ? { email, password } : { email, password, username };

    doFetch({
      method: "post",
      data: {
        user
      }
    });
  };

  useEffect(() => {
    if (!response) {
      return;
    }
    console.log("response", response);
    setToken(response.user.token);
    setisSuccessfullSubmit(true);
    setCurrentUserState(state => ({
      ...state,
      isLoggedIn: true,
      isLoading: false,
      currentUser: response.user
    }));
  }, [response, setToken]);

  if (isSuccessfullSubmit) {
    return <Redirect to="/" />;
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">{pageTitle}</h1>
            <p className="text-xs-center">
              <Link to={descriptionLink}>{descriptionText}</Link>
            </p>
            <form onSubmit={handleSubmit}>
              <fieldset>
                {!isSignIn && (
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Username"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    ></input>
                  </fieldset>
                )}
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
                  {pageTitle}
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
