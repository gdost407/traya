import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Profile = ({ phone, onSubmit, onBack, showHeader }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name && age && gender) onSubmit();
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
        <div className="fw-semibold mb-3">Enter Profile Details</div>
        <div className="mb-3">
          <input
            className="form-control mb-2"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="number"
            className="form-control mb-2"
            placeholder="Age"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
          <select
            className="form-select"
            value={gender}
            onChange={e => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <button className="btn btn-success fw-semibold w-100 py-2 position-absolute" style={{bottom: "20px", left: "20px", right: "20px"}} type="submit">
          Save Details
        </button>
      </form>
    </div>
  );
};

export default Profile;
