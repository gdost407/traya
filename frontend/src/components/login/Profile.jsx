import React, { useState } from "react";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles, faChevronLeft, faMars, faMarsAndVenus, faUser, faVenus } from "@fortawesome/free-solid-svg-icons";

const Profile = ({ phone, onSubmit, onBack, showHeader }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || name.trim() === "") {
      toast.error("Please enter your name!");
      return;
    }

    if (!age || isNaN(age) || age <= 0) {
      toast.error("Please enter a valid age!");
      return;
    }

    if (!gender) {
      toast.error("Please select your gender!");
      return;
    }

    // Save profile data here if needed or pass to parent
    onSubmit({ name, age, gender });
  }

  return (
    <div className="card rounded-0 shadow text-center py-5 px-4 min-vh-100 position-relative">
      <div className="card-header border-0 bg-white">
        <h2 className="mb-4 fs-6 p-2 fw-medium text-center">
          <FontAwesomeIcon icon={faChevronLeft} onClick={onBack} className="float-start"/>
          Setup Profile
        </h2>
      </div>
      <form className="card-body text-center" onSubmit={handleSubmit}>
        <div className="mb-4">
          <picture>
            <img src="https://img.freepik.com/premium-photo/web-user-3d-icon-isolated-white-background_1108860-1344.jpg" alt="" style={{height: "30vh", aspectRatio: "1", objectFit: "contain"}}/>
          </picture>
        </div>
        <div className="fw-semibold mb-3">Enter Profile Details</div>
        <div className="mb-3" style={{maxWidth: 500, margin: "0 auto"}}>
          <div className="position-relative mb-4">  
            <input
              type="text"
              className="form-control p-2 mb-2 ps-5"
              placeholder="Full Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              title="Full name is required"
            />
            <FontAwesomeIcon icon={faUser} className="position-absolute" style={{top: "12px", left: "15px"}} />
          </div>

          <div className="row mb-4">
            {/* Gender Selection */}
            <div className="col">
              <label htmlFor="genderMale" className={`card p-2 text-center ${gender === "Male" ? "border-purple bg-light" : ""}`} onClick={() => setGender("Male")} style={{ cursor: "pointer" }} >
                <input type="radio" name="gender" id="genderMale" value="Male" checked={gender === "Male"} onChange={() => setGender("Male")} className="d-none" />
                <span><FontAwesomeIcon icon={faMars} className="me-1" /> Male</span>
              </label>
            </div>

            <div className="col">
              <label htmlFor="genderFemale" className={`card p-2 text-center ${gender === "Female" ? "border-purple bg-light" : ""}`} onClick={() => setGender("Female")} style={{ cursor: "pointer" }} >
                <input type="radio" name="gender" id="genderFemale" value="Female" checked={gender === "Female"} onChange={() => setGender("Female")} className="d-none" />
                <span><FontAwesomeIcon icon={faVenus} className="me-1" /> Female</span>
              </label>
            </div>

            <div className="col">
              <label htmlFor="genderOther" className={`card p-2 text-center ${gender === "Other" ? "border-purple bg-light" : ""}`} onClick={() => setGender("Other")} style={{ cursor: "pointer" }} >
                <input type="radio" name="gender" id="genderOther" value="Other" checked={gender === "Other"} onChange={() => setGender("Other")} className="d-none" />
                <span><FontAwesomeIcon icon={faMarsAndVenus} className="me-1" /> Other</span>
              </label>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-4">
              <div className="position-relative mb-4">  
                <input
                  type="tel"
                  className="form-control p-2 mb-2 ps-5"
                  placeholder="Age"
                  value={age}
                  onChange={e => setAge(e.target.value)}
                  required
                  title="Age is required"
                />
                <FontAwesomeIcon icon={faCakeCandles} className="position-absolute" style={{top: "12px", left: "15px"}} />
              </div>
            </div>
            <div className="col pt-2">
              <input type="range" className="form-range mb-3" min="5" max="99" step="1" value={age} onChange={(e) => setAge(e.target.value)} id="range4"/>
            </div>
          </div>
          
        </div>
        <button className="btn btn-purple fw-semibold w-50 m-auto py-2 position-absolute" style={{bottom: "20px", left: "20px", right: "20px"}} type="submit">
          Save Details
        </button>
      </form>
    </div>
  );
};

export default Profile;
