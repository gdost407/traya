// frontend/src/pages/Profile.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OnboardDetails = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    if (!name || !age || !gender) return alert("Fill all fields.");
    const profile = { name, age, gender };
    localStorage.setItem("auth_profile", JSON.stringify(profile));
    navigate("/verify");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Tell us about you</h2>
        <form onSubmit={handleNext} className="space-y-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            value={age}
            onChange={(e) => setAge(e.target.value.replace(/\D/g, ""))}
            placeholder="Age"
            className="w-full border rounded px-3 py-2"
            required
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <button className="w-full bg-green-600 text-white py-2 rounded">Next (Verify OTP)</button>
        </form>
      </div>
    </div>
  );
};

export default OnboardDetails;
