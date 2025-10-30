import React, { useState, useEffect } from "react";
import Phone from "../components/login/Phone";
import Profile from "../components/login/Profile";
import Verify from "../components/login/Verify";

const AssignmentPage = () => {
  const [screen, setScreen] = useState(1); // 1: welcome, 2: phone, 21: profile, 3: verify
  const [mode, setMode] = useState(window.innerWidth < 768 ? "mobile" : "desktop");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const handleResize = () => setMode(window.innerWidth < 768 ? "mobile" : "desktop");
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid min-vh-100" style={{background: "#fff"}}>
      <div className="row">
        <div className="col-md-3 d-none d-md-block p-0"></div>
        <div className="col-md-3">
          
        </div>
      </div>
    </div>
  );
};

function WelcomeScreen({ onStart }) {
  return (
    <div className="card rounded-0 shadow text-white text-center py-5 px-4 h-100 min-vh-100 position-relative" style={{background: "linear-gradient(220deg, #272fa9, #48573c, #461354)"}}>
      <div>
        <h1 className="mb-3" style={{ fontWeight: 700, fontSize: "2.2rem" }}>
          <span className="text-warning">Head Issue</span> Track your Health!
        </h1>
        <p className="mb-4">your gateway to extraordinary quests around the globe</p>
        {/* <div style={{fontSize:200, margin:"10vh auto"}}>🧠</div> */}
        <div style={{margin:"auto"}}>
          <picture>
            <img src="https://png.pngtree.com/png-vector/20231214/ourmid/pngtree-surgery-clinical-medical-hospital-outpatient-medical-brain-png-image_11338556.png" alt="" className="img-fluid"/>
          </picture>
        </div>
        <button className="btn btn-light btn-lg px-5 fw-semibold mt-2 position-absolute d-md-none" onClick={onStart} style={{bottom: "20px", left: "20px", right: "20px"}}>
          Let's Start
        </button>
      </div>
    </div>
  );
}

export default AssignmentPage;
