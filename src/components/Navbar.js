import React from "react";
import { Link } from "react-router-dom";
import "./all.css";

const Navbar = () => {
  return (
    <div>
      <></>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://t3.ftcdn.net/jpg/03/08/93/06/360_F_308930672_f5WfklXsMtMWpBpcFUsqJOgPI1gU9Kce.jpg"
              alt=""
              width="40"
              height="40"
              className="d-inline-block align-text-top"
            />
            <h3 className="heading">NewzX</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-top"
            tabIndex="-1"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel"
          >
            <div
              className="offcanvas-header bg-dark text-light"
              // style={{ backgroundColor: "#062C30", color: "whitesmoke" }}
            >
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                NewzX
              </h5>
              <button
                type="button"
                className="btn-close text-reset btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="offcanvas-body bg-dark text-light"
              // style={{ backgroundColor: "#062C30", color: "whitesmoke" }}
            >
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/sports">
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/technology">
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/science">
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/health">
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/business">
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/entertainment">
                        Entertainment
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="space-div" />
    </div>
  );
};

export default Navbar;
