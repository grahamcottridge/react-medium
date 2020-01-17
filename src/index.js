import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Navbar from "./components/navbar/Navbar.component";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
