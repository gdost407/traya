import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Phone from "../components/login/Phone";
import Profile from "../components/login/Profile";
import Verify from "../components/login/Verify";

const LoginPage = () => {
  const navigate = useNavigate();
  const [screen, setScreen] = useState(1); // 1: welcome, 2: phone, 21: profile, 3: verify
  const [mode, setMode] = useState(window.innerWidth < 768 ? "mobile" : "desktop");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const [callId, setCallId] = useState(null);

  useEffect(() => {
    const handleResize = () => setMode(window.innerWidth < 768 ? "mobile" : "desktop");
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {mode === "mobile" ? (
        <div className="container-fluid p-0">
          {screen === 1 && <WelcomeScreen onStart={() => setScreen(2)} />}
          {screen === 2 &&
            <Phone
              onCheckPhone={async (phone, exists, callId) => {
                setPhoneNumber(phone);
                setCallId(callId);
                if (exists) {
                  setIsNewUser(false);
                  setScreen(3); // go to verify directly for existing user
                } else {
                  setIsNewUser(true);
                  setScreen(21); // new user, go to profile
                }
              }}
              onBack={() => setScreen(1)}
            />
          }
          {screen === 21 &&
            <Profile
              phone={phoneNumber}
              onSubmit={() => setScreen(3)}
              onBack={() => setScreen(2)}
            />
          }
          {screen === 3 &&
            <Verify
              phone={phoneNumber}
              callId={callId}
              newUser={isNewUser}
              onBack={() => (isNewUser ? setScreen(21) : setScreen(2))}
              onVerified={(signedUp) => setScreen(signedUp ? 4 : 5)} // 4: assignment, 5: dashboard
            />
          }
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-4 p-0">
              <WelcomeScreen onStart={() => setScreen(2)} />
            </div>
            <div className="col-md-8 p-0">
              {screen === 1 &&
                <Phone
                  onCheckPhone={async (phone, exists, callId) => {
                    setPhoneNumber(phone);
                    setCallId(callId);
                    if (exists) {
                      setIsNewUser(false);
                      setScreen(3);
                    } else {
                      setIsNewUser(true);
                      setScreen(21);
                    }
                  }}
                  showHeader
                />
              }
              {screen === 21 &&
                <Profile
                  phone={phoneNumber}
                  onSubmit={() => setScreen(3)}
                  showHeader
                  onBack={() => setScreen(2)}
                />
              }
              {screen === 3 &&
                <Verify
                  phone={phoneNumber}
                  callId={callId}
                  newUser={isNewUser}
                  showHeader
                  onBack={() => (isNewUser ? setScreen(21) : setScreen(2))}
                  onVerified={(signedUp) => {
                    if (signedUp) {
                      navigate("/assignment");
                    } else {
                      navigate("/dashboard");
                    }
                  }}
                />
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function WelcomeScreen({ onStart }) {
  return (
    <div className="card rounded-0 shadow text-white text-center py-5 px-4 h-100 min-vh-100 position-relative" style={{background: "linear-gradient(220deg, #9b3d9b, #8160B7)"}}>
      <div>
        <h1 className="mb-3" style={{ fontWeight: 700, fontSize: "2.2rem" }}>
          <span className="text-warning">Head Issue</span> Track your Health!
        </h1>
        <p className="mb-4">your gateway to extraordinary quests around the globe</p>
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

export default LoginPage;
