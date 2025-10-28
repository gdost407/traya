// frontend/src/pages/Profile.jsx
import { faMars, faMarsAndVenus, faVenus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const OnboardDetails = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("18");
  const [gender, setGender] = useState("");
  const handleGenderChange = (value) => {
    setGender(value);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const { phoneNumber } = location.state || {};

  const handleNext = (e) => {
    e.preventDefault();
    if (!name || !age || !gender) return toast.error("Please fill all fields!");;
    const profile = { name, age, gender };
    // localStorage.setItem("auth_profile", JSON.stringify(profile));
    navigate("/onboard-otp-verify", { state: { phoneNumber, profile } });
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
        <div className="progress position-absolute bottom-0 start-0 end-0" role="progressbar"  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{height: "3px"}}>
          <div className="progress-bar bg-success" style={{width: "60%"}}></div>
        </div>
      </div>

      <div className="d-flex align-item-center" style={{height: "calc(100vh - 100px)"}}>
        <div className="m-auto animate__animated animate__slideInRight" style={{maxWidth: "550px", width: "100%"}}>
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
      </div>

    </div>
  );
};

export default OnboardDetails;
