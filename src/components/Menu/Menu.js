import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="index3.html" className="brand-link">
                <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">Ecommerce</span>
            </a>
            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        
                        <li className="nav-item">
              <NavLink to="/" className="">
                <a className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Home
                  </p>
                </a>
              </NavLink>
            </li>
                        

                    </ul>
                </nav>
            </div>
        </aside>


    )
}
