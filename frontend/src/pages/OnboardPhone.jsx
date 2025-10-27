import { React, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setupRecaptcha, signInWithPhoneNumber, auth } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const OnboardPhone = () => {
  const [phone, setPhone] = useState("");

  const sendOTP = async (e) => {
    e.preventDefault();
    if (!phone) return alert("Enter mobile number (without country code).");

    // Setup reCAPTCHA
    const appVerifier = setupRecaptcha("recaptcha-container");
    const fullPhone = "+91" + phone;

    try {
      // ✅ Use imported `auth` (not window.*)
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        fullPhone,
        appVerifier
      );
      window.confirmationResult = confirmationResult;

      // Check with backend if user exists
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE}/check-user`,
        {
          params: { phone: fullPhone },
        }
      );

      const exists = res.data.exists;
      localStorage.setItem("auth_phone", fullPhone);

      if (!exists) {
        navigate("/profile");
      } else {
        navigate("/verify");
      }
    } catch (err) {
      console.error("sendOTP error:", err);
      alert("Failed to send OTP. Check console for details.");
      if (window.recaptchaVerifier) window.recaptchaVerifier.clear();
    }
  };

  const [leftHeight, setLeftHeight] = useState("100vh");
  const [isMobile, setIsMobile] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => window.innerWidth < 576; // bootstrap 'sm' breakpoint
    setIsMobile(checkMobile());

    // if mobile, animate from 100vh -> 50vh
    if (checkMobile()) {
      // leave at 100vh briefly so user sees the initial state, then shrink
      const t = setTimeout(() => setLeftHeight("50vh"), 1000);
      return () => clearTimeout(t);
    } else {
      // on larger screens keep full height (you can adjust if needed)
      setLeftHeight("100vh");
    }
  }, []);

  const handleOtpSend = () => {
    // TODO: send otp
    if (!phoneNumber) {
      toast.success("Please enter phone number!");
      return;
    }
    navigate("/setup1", { state: { phoneNumber } });
  };

  return (
    <div className="container-fluid min-vh-100 position-relative overflow-hidden pt-2">
      <div className="position-absolute bg-danger rounded-circle" style={{width: '220px', height: '220px', top: '-55px', left: '-100px', opacity: 0.6}}></div>
      <div className="position-absolute bg-danger rounded-circle" style={{width: '220px', height: '220px', bottom: '-100px', right: '-100px', opacity: 0.6}}></div>
      <div className="card p-2 position-relative">
        <h5>
          <img
            src="/1761393804595.png"
            alt="logo"
            style={{ width: "50px", aspectRatio: "1", objectFit: "cover" }}
          />
          The Last Headache
        </h5>
        <div className="progress position-absolute bottom-0 start-0 end-0" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "3px"}}>
          <div className="progress-bar bg-success" style={{width: "25%"}}></div>
        </div>
      </div>

      <div className="d-flex align-item-center" style={{height: "calc(100vh - 100px)"}}>
        <div className="m-auto" style={{maxWidth: "550px", width: "100%"}}>
          <div className="card p-2 mb-2">
            <div className="row">
              <div className="col-sm-2 col-2">
                <img
                  src="/1761393804595.png"
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
            <input type="tel" name="" id="" className="form-control mb-3" />

            <p className="text-end">
              <button className="btn btn-primary" onClick={handleOtpSend}>Send OTP</button>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default OnboardPhone;
