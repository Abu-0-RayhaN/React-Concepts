import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white border">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
              height={50}
              width={100}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link text-gray-800 border-bottom border-2 border-transparent px-3 py-2.5 me-2"
                  activeClassName="border-orange-700 text-orange-700"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link text-gray-800 border-bottom border-2 border-transparent px-3 py-2.5 me-2"
                  activeClassName="border-orange-700 text-orange-700"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link text-gray-800 border-bottom border-2 border-transparent px-3 py-2.5 me-2"
                  activeClassName="border-orange-700 text-orange-700"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <Link
                  to="/github"
                  className="nav-link text-gray-800 border-bottom border-2 border-transparent px-3 py-2.5 me-2"
                >
                  Github
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/user"
                  className="nav-link text-gray-800 border-bottom border-2 border-transparent px-3 py-2.5 me-2"
                >
                  User
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/GetStarted"
                  className="nav-link text-primary border rounded px-4 py-2.5 me-2"
                >
                  Get started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
// import React from "react";

// const Header = () => {
//   return <>
//   <header className="">

//   </header>
//   </>;
// };

// export default Header;
