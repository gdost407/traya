import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link className="navbar-brand" href="#">
          <img src="https://traya.health/cdn/shop/files/TrayaLogoWhite_250x_73a5d7e5-bd9b-4089-8e81-80249caeac61.webp?v=1662534292&width=200" alt="" className="w-50" />
        </Link>
        <div className="d-flex align-items-center gap-3">
          <button type="button" className="btn btn-sm btn-light">
            TAKE THE HAIR TEST <sup>TM</sup>
          </button>
          <button type="button" className="nav-link fs-4 text-light">
            <FontAwesomeIcon icon={faWhatsapp} />
          </button>
          <button type="button" className="nav-link fs-4 text-light">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
