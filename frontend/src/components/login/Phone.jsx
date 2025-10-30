import React, { useState } from "react";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Phone = ({ onSubmit, onBack, showHeader }) => {
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid 10-digit phone number!");
      return;
    }

    onSubmit(phone);
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
            <img src="https://img.freepik.com/free-photo/3d-render-secure-login-password-illustration_107791-16640.jpg" alt="" style={{height: "30vh", aspectRatio: "1", objectFit: "contain"}}/>
          </picture>
        </div>
        <div className="fw-semibold mb-3">Enter Your Phone Number</div>
        <div className="input-group input-group-lg mb-3 justify-content-center" style={{maxWidth: 500, margin: "0 auto"}}>
          <select name="" id="" className="form-control w-auto" style={{maxWidth: "100px"}}>
            <option value="+91">🇮🇳 +91</option>
          </select>
          <input
            className="form-control"
            type="tel"
            placeholder="9876543210"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
            required
            title="Please enter a valid 10-digit phone number."
            style={{letterSpacing: "5px"}}
          />
        </div>
        <div className="mb-3 text-secondary small pt-5">By proceeding, you agree to verify your mobile number through OTP <br /> and accept our <a href="" className="text-decoration-none text-dark fw-medium">Privacy Policy</a> and <a href="" className="text-decoration-none text-dark fw-medium">Terms of Service</a>.</div>
        <button className="btn btn-success fw-semibold w-50 m-auto py-2 position-absolute" style={{bottom: "20px", left: "20px", right: "20px"}} type="submit">
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default Phone;
