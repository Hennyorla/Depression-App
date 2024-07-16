import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            className="sticky-img"
            src={require("../Assets/logo.png")}
            alt="Logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${classes.appointment}`}
                to="/get-started/signin"
              >
                BOOK AN APPOINTMENT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
