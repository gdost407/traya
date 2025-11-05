import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faBoxOpen, faCircleUser, faCartShopping, faQuestionCircle, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Cookies from "js-cookie";

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the JWT cookie
    Cookies.remove("jwt_token");
    // Redirect to login page
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="container-fluid p-0 overflow-hidden min-vh-100">
        <div className="card p-2 rounded-0 bg-purple-light">
          <div className="row">
            <div className="col-2">
              <FontAwesomeIcon icon={faCircleUser} className="" size="2x" />
            </div>
            <div className="col-10">
              <h5 className="m-0 pt-1">
                Yogesh
                <FontAwesomeIcon icon={faAnglesRight} className=" float-end" size="1x" />
              </h5>
            </div>
          </div>
        </div>
        <div className="container py-2">
          <div className="card p-2 bg-purple">
            <p className="mb-0">
              <FontAwesomeIcon icon={faCartShopping}/><br />
              Once you buy your kit
            </p>
            <p className="small">
              Traya doctors will approve your plan and build a detailsed prescription
            </p>
            <button className="btn btn-warning w-100">Buy Now</button>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-3 col-4 mb-2">
              <div className="card p-2 bg-purple-light text-center">
                <p className="mb-0 small">
                  <FontAwesomeIcon icon={faChartLine}/><br />
                  Hair Progress
                </p>
              </div>
            </div>
            <div className="col-md-2 col-sm-3 col-4 mb-2">
              <div className="card p-2 bg-purple-light text-center">
                <p className="mb-0 small">
                  <FontAwesomeIcon icon={faQuestionCircle}/><br />
                  Help & Support
                </p>
              </div>
            </div>
            <div className="col-md-2 col-sm-3 col-4 mb-2">
              <div className="card p-2 bg-purple-light text-center">
                <p className="mb-0 small">
                  <FontAwesomeIcon icon={faWhatsapp}/><br />
                  Chat With Us
                </p>
              </div>
            </div>
            <div className="col-md-2 col-sm-3 col-4 mb-2">
              <div className="card p-2 bg-purple-light text-center">
                <p className="mb-0 small">
                  <FontAwesomeIcon icon={faBoxOpen}/><br />
                  Orders
                </p>
              </div>
            </div>
          </div>
          <br />
          <ul>
            <li>
              <button onClick={handleLogout} className="btn btn-link text-decoration-none p-0" style={{background: 'none', border: 'none', color: 'inherit', cursor: 'pointer'}}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProfilePage;
