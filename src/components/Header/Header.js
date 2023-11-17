import React from 'react'
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                <NavLink to="/" className="">
                <a className="nav-link">
                  <p>
                    Home
                  </p>
                </a>
              </NavLink>
               
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                <NavLink to="/ecommerce" >
                <a className="nav-link">
                  <p>
                  Ecommerce
                  </p>
                </a>
              </NavLink>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                        <i className="fas fa-expand-arrows-alt" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                        <i className="fas fa-th-large" />
                    </a>
                </li>
            </ul>
        </nav>

    )
}
