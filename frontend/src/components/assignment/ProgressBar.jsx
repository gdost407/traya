import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ProgressBar({ progress, canPrev, onPrev, }) {
  return (
    <div className="mb-4">
      <div className="d-md-none">
        <div className="row">
          <div className="col-6 py-3">
            <FontAwesomeIcon icon={faChevronLeft} className="text-purple" onClick={onPrev} disabled={!canPrev}/><br />
          </div>
          <div className="col-6 py-3 text-end">
            <Link to="/dashboard"><FontAwesomeIcon icon={faXmark} className="text-danger"/></Link>
          </div>
          <div className="col-12">
            <div className="progress rounded-pill" style={{height: "5px"}}>
              <div className="progress-bar bg-purple" role="progressbar" style={{width: `${progress}%`}}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-md-block d-none pt-5">
        <center>
          <div className="display-1 mb-4 text-primary">
            <picture>
              <img src="https://img.freepik.com/premium-vector/vector-student-exam-preparation-flat-illustration_1058698-663.jpg" alt="" style={{maxWidth: "300px", width: "100%", aspectRatio: "1", objectFit: "cover"}}/>
            </picture>
          </div>
          <h1 className="mb-3">🩺 Health Analyzer</h1>
          <p className="mb-4 text-secondary">Evaluate your lifestyle, nutrition, and fitness habits with this short interactive quiz. Gain instant feedback to help you make smarter health choices every day.</p>
        </center>
      </div>
    </div>
  );
}
