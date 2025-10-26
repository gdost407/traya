// frontend/src/pages/VerifyOTP.jsx
import React, { useState } from "react";
import axios from "axios";
import { auth, requestFcmToken } from "../firebase";
import { useNavigate } from "react-router-dom";

const OnboardOtpVerify = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Enter OTP</h2>
        <form onSubmit={verify} className="space-y-3">
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            placeholder="6-digit OTP"
            className="w-full border rounded px-3 py-2"
            required
          />
          <button className="w-full bg-indigo-600 text-white py-2 rounded" disabled={loading}>
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OnboardOtpVerify;
