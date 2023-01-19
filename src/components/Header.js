import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

function Header() {

  const [isloggedIn, setIsloggedIn] = useState(false)
  useEffect(() => {

    let userData = JSON.parse(localStorage.getItem('fintaxcialUser'))
    if (userData?.role && userData?.token) {
      if (userData.role == 'admin') {
        setIsloggedIn(1)
      } else {
        setIsloggedIn(2)
      }
    }
  }, [])
  return (
    <>
      <div className="header-menu bg-light">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <img
              className="logo-img"
              src="assets/images/FTnew.png"
              alt="#"
            ></img>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ">
                <li className="nav-item ">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/membership">Membership</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services">Services</NavLink>
                </li>
                {isloggedIn == 1 ?

                  <li className="nav-item">
                    <NavLink to="/admin">Admin Dashboard</NavLink>
                  </li>
                  :
                  isloggedIn == 2 ?
                    <li className="nav-item">
                      <NavLink to="/dashboard">DashBoard</NavLink>
                    </li> :
                    <li className="nav-item">
                      <NavLink to="/login">Login</NavLink>
                    </li>

                }
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
