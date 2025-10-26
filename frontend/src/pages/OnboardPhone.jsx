import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { setupRecaptcha, signInWithPhoneNumber, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const sendOTP = async (e) => {
    e.preventDefault();
    if (!phone) return alert("Enter mobile number (without country code).");

    // Setup reCAPTCHA
    const appVerifier = setupRecaptcha("recaptcha-container");
    const fullPhone = "+91" + phone;

    try {
      // ✅ Use imported `auth` (not window.*)
      const confirmationResult = await signInWithPhoneNumber(auth, fullPhone, appVerifier);
      window.confirmationResult = confirmationResult;

      // Check with backend if user exists
      const res = await axios.get(`${import.meta.env.VITE_API_BASE}/check-user`, {
        params: { phone: fullPhone },
      });

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

  return (
    // <div className="min-h-screen flex items-center justify-center p-4">
    //   <div className="w-full max-w-md bg-white p-6 rounded shadow">
    //     <h2 className="text-xl font-semibold mb-4">Login / Signup - Enter Mobile</h2>
    //     <form onSubmit={sendOTP} className="space-y-3">
    //       <div>
    //         <label className="block text-sm">Mobile (India - without +91)</label>
    //         <input
    //           type="tel"
    //           value={phone}
    //           onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
    //           className="w-full border rounded px-3 py-2"
    //           placeholder="e.g. 9876543210"
    //           required
    //         />
    //       </div>

    //       <div id="recaptcha-container" />
    //       {/* <button className="w-full bg-blue-600 text-white py-2 rounded">Send OTP</button> */}
    //       <Link to="/profile" className="w-full bg-success text-white py-2 rounded">Send OTP</Link>
    //     </form>
    //   </div>
    // </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 bg-success min-vh-100 d-none d-sm-block">

        </div>
        <div className="col bg-light min-vh-100 p-4">
          <h4 className="text-success mt-3">
            <img src="/1761393804595.png" alt="" style={{width: "50px"}} />
            The Last Headache.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
