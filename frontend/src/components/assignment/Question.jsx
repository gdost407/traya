import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faMars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faUbuntu } from "@fortawesome/free-brands-svg-icons";

export default function Question({ question, index, answer = [], onAnswer }) {
  const handleChange = (e) => {
    const val = e.target.type === "range" ? +e.target.value : +e.target.value;

    if (question.type === "radio") {
      onAnswer([val]);
    } else if (question.type === "checkbox") {
      onAnswer(
        answer.includes(val)
          ? answer.filter((i) => i !== val)
          : [...answer, val]
      );
    } else if (question.type === "textarea") {
      onAnswer([e.target.value]);
    } else if (question.type === "range") {
      onAnswer([+e.target.value]);
    }
  };

  return (
    <div className="mb-4">
      <div className="mb-2">
        <h2 className="text-muted">
          <FontAwesomeIcon icon={faUbuntu} className="fs-1" /> {question.title}
        </h2>
        <hr style={{ width: "20vw" }} />
      </div>

      <p>{question.question}</p>

      {/* --- Radio or Checkbox --- */}
      {(question.type === "radio" || question.type === "checkbox") && (
        <div className="row">
          {question.options.map((opt, i) => {
            const isChecked = answer.includes(i);
            return (
              <div className="col-md-6 mb-2" key={i}>
                <label
                  htmlFor={`q${index}o${i}`}
                  className={`form-check border rounded-2 cursor-pointer ${
                    isChecked ? "border-purple" : ""
                  }`}
                  style={{
                    borderWidth: isChecked ? "2px" : "1px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div className="p-2">
                    <input
                      className="form-check-input me-2"
                      type={question.type}
                      name={`question${index}`}
                      id={`q${index}o${i}`}
                      value={i}
                      checked={isChecked}
                      onChange={handleChange}
                    />
                    {opt}
                  </div>
                </label>
              </div>
            );
          })}
        </div>
      )}

      {/* --- Textarea --- */}
      {question.type === "textarea" && (
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Type your answer..."
            value={answer[0] || ""}
            onChange={handleChange}
          ></textarea>
        </div>
      )}

      {/* --- Range --- */}
      {question.type === "range" && (
        <div className="mb-3">
          <input
            type="range"
            className="form-range"
            min={question.options[0]}
            max={question.options[1]}
            value={answer[0] || question.options[0]}
            onChange={handleChange}
          />
          <div className="d-flex justify-content-between">
            <small>{question.options[0]}</small>
            <small>{answer[0] || question.options[0]}</small>
            <small>{question.options[1]}</small>
          </div>
        </div>
      )}
    </div>
  );
}
