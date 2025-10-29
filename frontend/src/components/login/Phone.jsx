import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Phone = ({ onSubmit, onBack, showHeader }) => {
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (phone) onSubmit(phone);
  }

  return (
    <div className="card rounded-0 shadow text-center py-5 px-4 min-vh-100 position-relative">
      <div className="card-header border-0 bg-white">
        <h2 className="mb-4 fs-6 p-2 fw-medium text-center">
          <FontAwesomeIcon icon={faChevronLeft} onClick={onBack} className="float-start"/>
          Create Account
        </h2>
      </div>
      <form className="card-body text-center" onSubmit={handleSubmit}>
        <div className="mb-4">
          <picture>
            <img src="https://www.shutterstock.com/image-vector/happy-man-dials-phone-number-260nw-2016856508.jpg" alt="" style={{width: "10rem", aspectRatio: "1", objectFit: "contain"}}/>
          </picture>
          <span className="d-inline-block bg-light rounded p-4 text-success" style={{ fontSize: 48 }}><i className="bi bi-telephone"></i></span>
        </div>
        <div className="fw-semibold mb-3">Enter Your Phone Number</div>
        <div className="input-group mb-3 justify-content-center" style={{maxWidth: 320, margin: "0 auto"}}>
          <span className="input-group-text">🇮🇳 +91</span>
          <input
            className="form-control"
            type="tel"
            placeholder="618707630"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3 text-secondary small">Terms And Conditions</div>
        <button className="btn btn-success fw-semibold w-50 m-auto py-2 position-absolute" style={{bottom: "20px", left: "20px", right: "20px"}} type="submit">
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default Phone;
