import { React, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const OnboardVerify = () => {
  const [animateClass, setAnimateClass] = useState("animate__slideInUp");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`m-auto animate__animated ${animateClass}`} style={{ maxWidth: "550px", width: "100%" }}>
      <div className="card p-2 mb-2">
        <div className="row">
          <div className="col-sm-2 col-2">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_1280.png"
              alt="logo"
              style={{ width: "50px", aspectRatio: "1", objectFit: "cover" }}
            />
          </div>
          <div className="col">
            <h6 className="fw-medium">You are on right path to healthier you.</h6>
            <p className="small mb-0">Login with Secure OTP Authentication</p>
          </div>
        </div>
      </div>
      <div className="card p-2 mb-2">
        <h6 className="fw-medium">Verify OTP.</h6>
        <input type="tel" name="phone_number" value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))} id="" className="form-control mb-3" />

        <p className="text-end">
          <button className="btn btn-primary" onClick={verify}>Send OTP</button>
        </p>
      </div>
    </div>
  );
};

export default OnboardVerify;
