import React from "react";
import { Link } from "react-router-dom";

export default function CompletionScreen() {
  return (
    <div className="d-flex flex-column align-items-center text-center p-5">
      <div className="display-1 mb-4">
        <picture>
          <img src="https://img.freepik.com/free-vector/man-getting-award-writing_74855-5891.jpg" alt="" style={{maxWidth: "300px", width: "100%", aspectRatio: "1", objectFit: "cover"}}/>
        </picture>
      </div>
      <h1 className="mb-3">Assignment Completed!</h1>
      <p className="text-secondary mb-5">Great job! You’ve finished the assignment.</p>
      <Link to="/dashboard" className="btn btn-lg btn-purple px-5 rounded-pill">View Results</Link>
    </div>
  );
}
