import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Bell, Search } from "react-bootstrap-icons"

const MyNav = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark border-bo border-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="assets/netflix_logo.png"
              className="netflixLogo"
              height="30"
              alt="logo"
              loading="lazy"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TV Shows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Recently Added
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My List
                </a>
              </li>
            </ul>

            <ul className="nav justify-content-end">
              <li className="nav-item">
                <i
                  className="fa-solid fa-magnifying-glass"
                  style={{ color: "#a6a6a6" }}
                ></i>
              </li>
              <li className="nav-item">
                <a className="nav-link link-light" href="#">
                  KIDS{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-light" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bell-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                  </svg>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="assets/avatar.png"
                    alt="avatar"
                    width="25"
                    height="25"
                    className="img-fluid avatarLogo"
                  />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="profile.html">
                      Profile Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
    </header>
  )
}

export default MyNav
