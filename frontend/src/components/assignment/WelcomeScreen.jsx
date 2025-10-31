import React from "react";
import { Link } from "react-router-dom";

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="d-flex flex-column align-items-center text-center p-5 position-relative min-vh-100">
      <Link to="/dashboard" className="position-absolute top-0 end-0 p-3 text-dark text-decoration-none">skip</Link>
      <div className="d-none d-md-block" style={{height: "50px"}}></div>
      <div className="d-md-none" style={{height: "150px"}}></div>
      <div className="display-1 mb-4 text-purple">
        <picture>
          <img src="https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150314535.jpg?ga=GA1.1.1802987962.1761897120&semt=ais_hybrid&w=740&q=80" alt="" style={{maxWidth: "300px", width: "100%", aspectRatio: "1", objectFit: "cover"}}/>
        </picture>
      </div>
      <h1 className="mb-3">Welcome to Your Assignment</h1>
      <p className="mb-4 text-secondary">Test your knowledge with this interactive quiz</p>
      <button className="btn btn-lg btn-purple px-5 rounded-pill" onClick={onStart}>
        Start Assignment
      </button>
    </div>
  );
}

