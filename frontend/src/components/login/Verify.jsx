import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Verify = ({ phone, onBack, showHeader }) => {
  const navigate = useNavigate();
  const codeLen = 6;
  const [values, setValues] = useState(Array(codeLen).fill(""));
  const inputRefs = useRef([]);

  function handleInput(idx, e) {
    const val = e.target.value.replace(/[^0-9]/g, '').slice(0,1);
    const newVals = [...values];
    newVals[idx] = val;
    setValues(newVals);
    if (val && idx < codeLen - 1) inputRefs.current[idx + 1].focus();
  }

  function handleKeyDown(idx, e) {
    if (e.key === "Backspace" && !values[idx] && idx > 0) {
      inputRefs.current[idx - 1].focus();
    }
  }

  function handleVerify(e) {
    e.preventDefault();
    // Add actual verification logic if needed
    navigate("/assignment");
  }

  return (
    <div className="card rounded-0 shadow text-center py-5 px-4 min-vh-100 position-relative">
      <div className="card-header border-0 bg-white">
        <h2 className="mb-4 fs-6 p-2 fw-medium text-center">
          <FontAwesomeIcon icon={faChevronLeft} onClick={onBack} className="float-start"/>
          Verify Account
        </h2>
      </div>
      <form className="card-body text-center" onSubmit={handleVerify}>
        <div className="mb-4">
          <picture>
            <img src="https://img.freepik.com/free-photo/3d-hand-hold-smartphone-with-authentication-form_107791-16570.jpg" alt="" style={{height: "30vh", aspectRatio: "1", objectFit: "contain"}}/>
          </picture>
        </div>
        <div className="fw-semibold mb-2">Enter The Verification Code Sent To</div>
        <div className="mb-3 text-secondary">{phone}</div>
        <div className="d-flex justify-content-center gap-2 mb-4">
          {Array(codeLen).fill(0).map((_, idx) => (
            <input
              key={idx}
              type="tel"
              maxLength="1"
              className="form-control text-center fs-3"
              style={{ width: "48px", height: "60px" }}
              value={values[idx]}
              onChange={e => handleInput(idx, e)}
              onKeyDown={e => handleKeyDown(idx, e)}
              ref={el => inputRefs.current[idx] = el}
            />
          ))}
        </div>
        <div className="mb-3 text-secondary small">
          Didn't Receive the Code? <a href="#" className="fw-bold text-dark text-decoration-none">Resend</a>
        </div>
        <button className="btn btn-success fw-semibold w-50 m-auto py-2 position-absolute" style={{bottom: "20px", left: "20px", right: "20px"}} type="submit">
          Verify
        </button>
      </form>
    </div>
  );
};

export default Verify;
