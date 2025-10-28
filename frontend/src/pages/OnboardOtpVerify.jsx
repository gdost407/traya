// frontend/src/pages/VerifyOTP.jsx
import React, { useState } from "react";
import axios from "axios";
import { auth, requestFcmToken } from "../firebase";
import { useLocation, useNavigate } from "react-router-dom";

const OnboardOtpVerify = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { phoneNumber, profile } = location.state || {};

  const verify = async (e) => {
    e.preventDefault();
    if (!window.confirmationResult) return alert("No OTP request found. Start again.");

    setLoading(true);
    try {
      const result = await window.confirmationResult.confirm(otp);
      // signed in
      const user = result.user;
      const idToken = await user.getIdToken();

      // get fcm token (frontend)
      const vapidKey = process.env.REACT_APP_VAPID_KEY || "YOUR_VAPID_KEY";
      const fcmToken = await requestFcmToken(vapidKey);

      // retrieve phone and profile from localStorage
      const phone = localStorage.getItem("auth_phone");
      const profile = JSON.parse(localStorage.getItem("auth_profile") || "null");

      // send to backend to upsert user + send welcome push
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE}/auth`,
        {
          idToken,
          phone,
          profile, // may be null
          fcmToken,
        }
      );

      // backend returns JWT + user
      const { token, user: userFromServer } = res.data;
      // store JWT as you prefer
      localStorage.setItem("jwt", token);
      localStorage.setItem("user", JSON.stringify(userFromServer));

      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      console.error("verify error:", err);
      alert("OTP verification failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid min-vh-100 position-relative overflow-hidden pt-2">
      <div className="position-absolute bg-danger rounded-circle" style={{width: '220px', height: '220px', top: '-55px', left: '-100px', opacity: 0.6}}></div>
      <div className="position-absolute bg-danger rounded-circle" style={{width: '220px', height: '220px', bottom: '-100px', right: '-100px', opacity: 0.6}}></div>
      <div className="card p-2 position-relative">
        <h5>
          <img
            src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_1280.png"
            alt="logo"
            style={{ width: "50px", aspectRatio: "1", objectFit: "cover" }}
          />
          TRAYA
        </h5>
        <div className="progress position-absolute bottom-0 start-0 end-0" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "3px"}}>
          <div className="progress-bar bg-success" style={{width: "95%"}}></div>
        </div>
      </div>

      <div className="d-flex align-item-center" style={{height: "calc(100vh - 100px)"}}>
        <div className="m-auto" style={{maxWidth: "550px", width: "100%"}}>
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
      </div>

    </div>
  );
};

export default OnboardOtpVerify;
