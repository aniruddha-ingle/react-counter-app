import React from "react";
//stateless functional component

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-pill badge-secondary m-2">
            Total Non-Zero Counters: {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};
export default NavBar;
