import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-purple sticky-top d-none d-sm-block">
      <div className="container">
        <Link className="navbar-brand text-white fw-medium" href="#">
          <img src="/1761393804595.png" alt="" style={{width: "50px"}} /> The Last Headache
        </Link>
        <div className="d-flex align-items-center gap-3">
          <Link to="/login" className="btn btn-sm btn-outline-light">
            TAKE THE HAIR TEST <sup>TM</sup>
          </Link>
          <Link to="https://wa.me/8625941504?text=Hey, I need changes in The Last Headache project." className="nav-link fs-4 text-white" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} />
          </Link>
          <button type="button" className="nav-link fs-4 text-white">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
