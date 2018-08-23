import React from "react";
import ReactDOM from "react-dom";
import { NavLink, Link, Router, BrowserRouter } from "react-router-dom";
import "./styles.css";

class Navbar extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="dropdown">
            <NavLink
              to="/services"
              className="dropbtn"
              activeClassName="selected"
            >
              Services
              <div className="dropdown-content">
                <NavLink to="/#">For entrepreneurs</NavLink>
                <NavLink to="/#">For student</NavLink>
                <NavLink to="/#">For hobbyists</NavLink>
              </div>
            </NavLink>
          </div>
          <NavLink
            to="/home"
            className="dropbtn1"
            exact
            activeClassName="selected"
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className="dropbtn1"
            activeClassName="selected"
          >
            Contact
          </NavLink>
          <NavLink to="/fq" className="dropbtn1" activeClassName="selected">
            F&Q
          </NavLink>
        </div>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Navbar />, rootElement);
