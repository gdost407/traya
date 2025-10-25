import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow bg-white sticky-top d-none d-sm-block">
      <div className="container">
        <Link className="navbar-brand text-success fw-medium" href="#">
          <img src="./public/1761393804595.png" alt="" style={{width: "50px"}} /> The Last Headache
        </Link>
        <div className="d-flex align-items-center gap-3">
          <button type="button" className="btn btn-sm btn-success">
            TAKE THE HAIR TEST <sup>TM</sup>
          </button>
          <button type="button" className="nav-link fs-4 text-success">
            <FontAwesomeIcon icon={faWhatsapp} />
          </button>
          <button type="button" className="nav-link fs-4 text-success">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
