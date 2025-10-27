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
        <div
          className="col-12 col-sm-4"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1575861/pexels-photo-1575861.jpeg?cs=srgb&dl=pexels-trayproductions-1575861.jpg&fm=jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: leftHeight,
            minHeight: leftHeight,
            transition: isMobile ? "height 1500ms ease" : undefined,
            overflow: "hidden",
          }}
        >
          <div className="d-flex align-items-end h-100 p-3"></div>
        </div>

        <div className="col-12 col-sm p-4">
          <div>
            <h4 className="d-flex align-items-center gap-2">
              <img
                src="/1761393804595.png"
                alt=""
                style={{ width: "80px", aspectRatio: "1", objectFit: "cover" }}
              />
              The Last Headache
            </h4>
            <p>Hello! Securely log in with your phone number.</p>

            <div className="row">
              <div className="col-12 col-sm-5">
                <div className="position-relative mb-3">
                  <FontAwesomeIcon icon={faPhoneAlt} className="text-muted position-absolute" style={{top: "10px", left: "10px"}}/>
                  <input
                    type="tel"
                    name="phone_number"
                    value={phoneNumber}
                    className="form-control bg-light ps-5"
                    id="floatingInput"
                    placeholder="9876543210"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                  
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleOtpSend}
                >
                  Send OTP
                </button>
              </div>
            </div>

            <div className="mt-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardPhone;
