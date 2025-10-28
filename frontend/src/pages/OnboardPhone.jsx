import { React, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setupRecaptcha, signInWithPhoneNumber, auth } from "../firebase";

const OnboardPhone = () => {
  const [animateClass, setAnimateClass] = useState("animate__slideInUp");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

  const clearRecaptcha = () => {
    try {
      const container = document.getElementById("recaptcha-container");
      if (container) container.innerHTML = "";
      if (window.recaptchaVerifier && typeof window.recaptchaVerifier.clear === "function") {
        window.recaptchaVerifier.clear();
      }
      window.recaptchaVerifier = null;
    } catch (e) {
      console.warn("recaptcha cleanup error:", e);
    }
  };

  const handleOtpSend = async () => {
    if (!phoneNumber) {
      toast.error("Please enter phone number!");
      return;
    }

    if (isSending) return; // avoid duplicate sends
    setIsSending(true);

    // sanitize phone digits (remove spaces, +, dashes)
    const digits = phoneNumber.replace(/\D/g, "");
    const fullPhone = "+91" + digits; // adjust country code as needed

    try {
      // clear any previous recaptcha widget to avoid duplicates
      clearRecaptcha();

      // Setup reCAPTCHA (make sure setupRecaptcha returns a valid RecaptchaVerifier)
      const appVerifier = setupRecaptcha("recaptcha-container");
      if (!appVerifier) throw new Error("reCAPTCHA setup failed");

      // send OTP (await is required)
      const confirmationResult = await signInWithPhoneNumber(auth, fullPhone, appVerifier);

      // store the result (you can store it in context/state if preferred)
      window.confirmationResult = confirmationResult;

      // animate out & navigate after animation
      setAnimateClass("animate__slideOutLeft");
      setTimeout(() => {
        // pass sanitized fullPhone to next screen
        navigate("/onboard-details", { state: { phoneNumber: fullPhone } });
      }, 600);
    } catch (err) {
      console.error("sendOTP error:", err);
      toast.error("Failed to send OTP. Check console for details.");
      // Try to clean up recaptcha so user can try again
      clearRecaptcha();
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="container-fluid min-vh-100 position-relative overflow-hidden pt-2">
      <div className="position-absolute bg-danger rounded-circle" style={{ width: '220px', height: '220px', top: '-55px', left: '-100px', opacity: 0.6 }}></div>
      <div className="position-absolute bg-danger rounded-circle" style={{ width: '220px', height: '220px', bottom: '-100px', right: '-100px', opacity: 0.6 }}></div>
      <div className="card p-2 position-relative">
        <h5>
          <img
            src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_1280.png"
            alt="logo"
            style={{ width: "50px", aspectRatio: "1", objectFit: "cover" }}
          />
          TRAYA
        </h5>
        <div className="progress position-absolute bottom-0 start-0 end-0" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "3px" }}>
          <div className="progress-bar bg-success" style={{ width: "25%" }}></div>
        </div>
      </div>

      <div className="d-flex align-item-center" style={{ height: "calc(100vh - 100px)" }}>
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
            <h6 className="fw-medium">Enter your phone number.</h6>
            <input type="tel" name="phone_number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} id="" className="form-control mb-3" placeholder="9876543210" />

            <p className="text-end">
              <button className="btn btn-primary" onClick={handleOtpSend} disabled={isSending}>
                {isSending ? "Sending..." : "Send OTP"}
              </button>
            </p>
          </div>
        </div>
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default OnboardPhone;
