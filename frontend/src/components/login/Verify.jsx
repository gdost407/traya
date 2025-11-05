import React, { useRef, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { authenticatedPost } from "../../utils/api.js";
import Cookies from "js-cookie";

const Verify = ({ phone, callId, newUser, onBack, showHeader, onVerified, profileData }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const codeLen = 6;
  const [values, setValues] = useState(Array(codeLen).fill(""));
  const inputRefs = useRef([]);
  const [serverCallId, setServerCallId] = useState(callId);

  const otpSent = useRef(false);

  useEffect(() => {
    if (otpSent.current) return;
    otpSent.current = true;
    async function sendOtp() {
      try {
        const response = await fetch(apiUrl + "/api/auth/send-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone })
        });
        const data = await response.json();
        if (response.ok && data.data) {
          setServerCallId(data.data);
          // setServerCallId("6b57fe80-fcb8-4369-9076-580a09f75d5d"); // MOCK CALL ID
          // toast.success("OTP sent successfully");
          toast.success(data.message);
        } else {
          toast.error(data.message || "Failed to send OTP");
        }
      } catch (error) {
        toast.error("Error sending OTP: " + error.message);
      }
    }

    sendOtp();
  }, [phone]);

  function handleInput(idx, e) {
    const val = e.target.value.replace(/[^0-9]/g, '').slice(0,1);
    const newVals = [...values];
    newVals[idx] = val;
    setValues(newVals);
    if (val && idx < codeLen - 1) inputRefs.current[idx + 1].focus();
  }

  function handleKeyDown(idx, e) {
    if (e.key === "Backspace" && !values[idx] && idx > 0) {
      inputRefs.current[idx - 1].focus();
    }
  }

  async function handleVerify(e) {
    e.preventDefault();
    
    if (values.some(v => v === "")) {
      toast.error("Please enter the full OTP code.");
      return;
    }

    let otp = values.join("");
    // otp = 578633; // MOCK OTP
    try {
      const response = await fetch(apiUrl + "/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp, callId: serverCallId })
      });
      const data = await response.json();


// ... existing code ...

      if (response.ok) {
        // Save token in a cookie for 14 days
        Cookies.set("jwt_token", data.token, { expires: 14 });

        if (newUser && profileData) {
          try {
            const profileResponse = await authenticatedPost("/api/auth/profile", { phone, ...profileData });

            const profileResult = await profileResponse.json();

            if (!profileResponse.ok) {
              toast.error(profileResult.message || "Failed to save profile");
              // still redirect, but maybe show a message
            }
          } catch (error) {
            toast.error("Error saving profile: " + error.message);
          }
        }

        // Redirect based on newUser status
        if (newUser) {
          onVerified(true); // go to assignment page
        } else {
          onVerified(false); // go to dashboard page
        }
      } else {
        toast.error(data.message || "OTP verification failed");
      }

    } catch (error) {
      toast.error("Error verifying OTP: " + error.message);
    }
  }

  return (
    <div className="card rounded-0 shadow text-center py-5 px-4 min-vh-100 position-relative">
      <div className="card-header border-0 bg-white">
        <h2 className="mb-4 fs-6 p-2 fw-medium text-center">
          <FontAwesomeIcon icon={faChevronLeft} onClick={onBack} className="float-start"/>
          Verify Account
        </h2>
      </div>
      <form className="card-body text-center" onSubmit={handleVerify}>
        <div className="mb-4">
          <picture>
            <img src="https://img.freepik.com/free-photo/3d-hand-hold-smartphone-with-authentication-form_107791-16570.jpg" alt="" style={{height: "30vh", aspectRatio: "1", objectFit: "contain"}}/>
          </picture>
        </div>
        <div className="fw-semibold mb-2">Enter The Verification Code Sent To</div>
        <div className="mb-3 text-secondary">{phone}</div>
        <div className="d-flex justify-content-center gap-2 mb-4">
          {Array(codeLen).fill(0).map((_, idx) => (
            <input
              key={idx}
              type="tel"
              maxLength="1"
              className="form-control text-center fs-3"
              style={{ width: "48px", height: "60px" }}
              value={values[idx]}
              onChange={e => handleInput(idx, e)}
              onKeyDown={e => handleKeyDown(idx, e)}
              ref={el => inputRefs.current[idx] = el}
            />
          ))}
        </div>
        <div className="mb-3 text-secondary small">
          Didn't Receive the Code? <a href="#" className="fw-bold text-dark text-decoration-none"
            onClick={async (e) => {
              e.preventDefault();
              // resend OTP on click
              try {
                const response = await fetch("/api/auth/send-otp", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ phone })
                });
                const data = await response.json();
                if (response.ok && data.callId) {
                  setServerCallId(data.callId);
                  toast.success("OTP resent successfully");
                } else {
                  toast.error(data.message || "Failed to resend OTP");
                }
              } catch (error) {
                toast.error("Error resending OTP: " + error.message);
              }
            }}
          >Resend</a>
        </div>
        <button className="btn btn-purple fw-semibold w-50 m-auto py-2 position-absolute" style={{bottom: "20px", left: "20px", right: "20px"}} type="submit">
          Verify
        </button>
      </form>
    </div>
  );
};

export default Verify;
