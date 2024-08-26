import React from "react";
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link className="navbar-brand text-danger bold-text" to="/">OTT Platform</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                        <>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/login">Login</Link>
                            </li>
                        </>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
