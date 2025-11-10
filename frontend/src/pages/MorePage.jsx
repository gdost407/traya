import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faBoxOpen, faCircleUser, faCartShopping, faQuestionCircle, faChartLine, faCircleCheck, faCaretRight, faChevronRight, faLock, faRotateRight, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Cookies from "js-cookie";

const MorePage = () => {
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
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                  About Us
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
                <div className="accordion-body p-0 pt-1">
                  <div class="list-group">
                    <Link to="/" class="list-group-item list-group-item-action">
                      <FontAwesomeIcon icon={faLock} className="text-purple"/> &nbsp; &nbsp; About Us
                      <FontAwesomeIcon icon={faChevronRight} className="float-end pt-1"/>
                    </Link>
                    <Link to="/" class="list-group-item list-group-item-action">
                      <FontAwesomeIcon icon={faCircleCheck} className="text-purple"/> &nbsp; &nbsp; Contact Us
                      <FontAwesomeIcon icon={faChevronRight} className="float-end pt-1"/>
                    </Link>
                    <Link to="/" class="list-group-item list-group-item-action">
                      <FontAwesomeIcon icon={faRotateRight} className="text-purple"/> &nbsp; &nbsp; WhatsApp
                      <FontAwesomeIcon icon={faChevronRight} className="float-end pt-1"/>
                    </Link>
                    <Link to="/" class="list-group-item list-group-item-action">
                      <FontAwesomeIcon icon={faCreditCard} className="text-purple"/> &nbsp; &nbsp; FAQs
                      <FontAwesomeIcon icon={faChevronRight} className="float-end pt-1"/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Terms & Policies
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body p-0 pt-1">
                  <div class="list-group">
                    <Link to="/privacy-policy" class="list-group-item list-group-item-action">
                      <FontAwesomeIcon icon={faLock} className="text-purple"/> &nbsp; &nbsp; Privacy Policy
                      <FontAwesomeIcon icon={faChevronRight} className="float-end pt-1"/>
                    </Link>
                    <Link to="/terms-and-conditions" class="list-group-item list-group-item-action">
                      <FontAwesomeIcon icon={faCircleCheck} className="text-purple"/> &nbsp; &nbsp; Terms & Conditions
                      <FontAwesomeIcon icon={faChevronRight} className="float-end pt-1"/>
                    </Link>
                    <Link to="/return-policy" class="list-group-item list-group-item-action">
                      <FontAwesomeIcon icon={faRotateRight} className="text-purple"/> &nbsp; &nbsp; Return Policy
                      <FontAwesomeIcon icon={faChevronRight} className="float-end pt-1"/>
                    </Link>
                    <Link to="/payment-policy" class="list-group-item list-group-item-action">
                      <FontAwesomeIcon icon={faCreditCard} className="text-purple"/> &nbsp; &nbsp; Payment Policy
                      <FontAwesomeIcon icon={faChevronRight} className="float-end pt-1"/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  Read More
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                <div className="accordion-body p-0 pt-1">
                  <div class="list-group">
                    <Link to="/" class="list-group-item list-group-item-action">
                      <FontAwesomeIcon icon={faLock} className="text-purple"/> &nbsp; &nbsp; General Queries
                      <FontAwesomeIcon icon={faChevronRight} className="float-end pt-1"/>
                    </Link>
                    <Link to="/" class="list-group-item list-group-item-action">
                      <FontAwesomeIcon icon={faCircleCheck} className="text-purple"/> &nbsp; &nbsp; Hair test
                      <FontAwesomeIcon icon={faChevronRight} className="float-end pt-1"/>
                    </Link>
                    <Link to="/" class="list-group-item list-group-item-action">
                      <FontAwesomeIcon icon={faRotateRight} className="text-purple"/> &nbsp; &nbsp; Hair Coach
                      <FontAwesomeIcon icon={faChevronRight} className="float-end pt-1"/>
                    </Link>
                    <Link to="/" class="list-group-item list-group-item-action">
                      <FontAwesomeIcon icon={faCreditCard} className="text-purple"/> &nbsp; &nbsp; Diet Plan
                      <FontAwesomeIcon icon={faChevronRight} className="float-end pt-1"/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                  Logout
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <div className="row">
                    <div className="col">
                      <button onClick={handleLogout} className="btn btn-outline-danger w-100">
                        Yes, Logout
                      </button>
                    </div>
                    <div className="col">
                      <button className="btn btn-outline-purple w-100" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour">
                        Stay Logged In
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MorePage;
