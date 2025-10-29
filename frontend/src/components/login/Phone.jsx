import { React, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const OnboardPhone = () => {
  const [animateClass, setAnimateClass] = useState("animate__slideInUp");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();


  const handleOtpSend = async () => {
    if (!phoneNumber) {
      toast.error("Please enter phone number!");
      return;
    }

    if (isSending) return; // avoid duplicate sends

    try {
      setIsSending(true);

      const res = await axios.post(import.meta.env.VITE_API_BASE + "/api/auth/Twilio/send-otp", { contact_no: phoneNumber });
      if (res.data?.status) {
        const sid = res.data.sid;

        toast.success("OTP sent successfully");
        setAnimateClass("animate__slideOutLeft");
        setTimeout(() => {
          navigate("/onboard-details", { state: { phoneNumber: phoneNumber } });
        }, 600);
      } else {
        toast.error(res.data?.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || err.message || "Network error");
    } finally {
      setIsSending(false);
    }
  };

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
        <h6 className="fw-medium">Enter your phone number.</h6>
        <input type="tel" name="phone_number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} id="" className="form-control mb-3" placeholder="9876543210" />

        <p className="text-end">
          <button className="btn btn-primary" onClick={handleOtpSend} disabled={isSending}>
            {isSending ? "Sending..." : "Send OTP"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default OnboardPhone;
