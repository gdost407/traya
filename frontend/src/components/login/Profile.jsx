import { React, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const OnboardProfile = () => {
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
            <p className="small mb-0">Fill in your details to get started</p>
          </div>
        </div>
      </div>
      <div className="card p-2 mb-2">
        <h6 className="fw-medium">Your phone number : {phoneNumber}</h6>
        <input type="text" name="full_name" value={name} onChange={(e) => setName(e.target.value)} id="" className="form-control mb-3" placeholder="Full Name"/>
        
        <h6 className="fw-medium">Age : {age}</h6>
        <input type="range" className="form-range mb-3" min="5" max="100" step="1" value={age} onChange={(e) => setAge(e.target.value)} id="range4"/>

        <div className="row mb-3">
            <h6 className="fw-medium mb-2">Gender</h6>

            {/* Male */}
            <div className="col">
                <label htmlFor="genderMale" className={`card p-2 text-center ${gender === "Male" ? "border-primary bg-light" : ""}`} onClick={() => handleGenderChange("Male")} style={{ cursor: "pointer" }} >
                    <input type="radio" name="gender" id="genderMale" value="Male" checked={gender === "Male"} onChange={() => handleGenderChange("Male")} className="d-none" />
                    <span><FontAwesomeIcon icon={faMars} className="me-1" /> Male</span>
                </label>
            </div>

            {/* Female */}
            <div className="col">
                <label htmlFor="genderFemale" className={`card p-2 text-center ${gender === "Female" ? "border-primary bg-light" : ""}`} onClick={() => handleGenderChange("Female")} style={{ cursor: "pointer" }} >
                    <input type="radio" name="gender" id="genderFemale" value="Female" checked={gender === "Female"} onChange={() => handleGenderChange("Female")} className="d-none" />
                    <span><FontAwesomeIcon icon={faVenus} className="me-1" /> Female</span>
                </label>
            </div>

            {/* Other */}
            <div className="col">
                <label htmlFor="genderOther" className={`card p-2 text-center ${gender === "Other" ? "border-primary bg-light" : ""}`} onClick={() => handleGenderChange("Other")} style={{ cursor: "pointer" }} >
                    <input type="radio" name="gender" id="genderOther" value="Other" checked={gender === "Other"} onChange={() => handleGenderChange("Other")} className="d-none" />
                    <span><FontAwesomeIcon icon={faMarsAndVenus} className="me-1" /> Other</span>
                </label>
            </div>
        </div>

        <p className="text-end">
          <button className="btn btn-primary" onClick={handleNext}>Save</button>
        </p>
      </div>
    </div>
  );
};

export default OnboardProfile;
