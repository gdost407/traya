import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import WelcomeScreen from "../components/assignment/WelcomeScreen";
import QuizScreen from "../components/assignment/QuizScreen";
import CompletionScreen from "../components/assignment/CompletionScreen";
import { authenticatedPost } from "../utils/api";

const questions = [
  {
    title: "Headache Profile",
    question: "How long have you been experiencing headaches?",
    type: "radio",
    options: ["Less than 1 month", "1–6 months", "More than 6 months"],
  },
  {
    title: "Headache Profile",
    question: "Frequency of headache:",
    type: "radio",
    options: ["Daily", "Weekly", "Monthly", "Occasional"],
  },
  {
    title: "Headache Profile",
    question: "Typical duration of a headache episode:",
    type: "radio",
    options: ["< 1 hour", "1–4 hours", "4–24 hours", "More than 24 hours"],
  },
  {
    title: "Pain Characteristics",
    question: "Where is the pain located?",
    type: "checkbox",
    options: ["One side of head", "Both sides", "Back of head / neck", "Forehead / behind eyes"],
  },
  {
    title: "Pain Characteristics",
    question: "How would you describe the pain?",
    type: "radio",
    options: ["Throbbing", "Pressure / Band-like", "Sharp / Electric", "Dull / Heavy"],
  },
  {
    title: "Pain Characteristics",
    question: "Rate your pain intensity",
    type: "range",
    options: ["0", "10"],
  },
  {
    title: "Pain Characteristics",
    question: "Does your headache get worse with activity or movement?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    title: "Associated Symptoms",
    question: "Does sleep or rest relieve your headache?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    title: "Associated Symptoms",
    question: "Do you experience dizziness or imbalance?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    title: "Associated Symptoms",
    question: "Do you feel nausea, vomiting, or visual changes before headache?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    title: "Associated Symptoms",
    question: "Are you sensitive to light, sound, or smell?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    title: "Associated Symptoms",
    question: "Do you have ringing in ears, ear fullness, or hearing loss?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    title: "Associated Symptoms",
    question: "Do you feel neck pain or stiffness with your headache?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    title: "Triggers",
    question: "Common triggers for your headaches:",
    type: "checkbox",
    options: ["Stress", "Lack of sleep", "Hormonal changes", "Certain foods", "Screen time / posture", "Weather changes", "None indentified"],
  },
  {
    title: "Triggers",
    question: "Do caffeine, alcohol, or dehydration make it worse?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    title: "Triggers",
    question: "Do you get headaches around your menstrual cycle? (for females)",
    type: "radio",
    options: ["Yes", "No", "Not applicable"],
  },
  {
    title: "Past History & Impact",
    question: "What medications have you tried?",
    type: "textarea",
    options: [""],
  },
  {
    title: "Past History & Impact",
    question: "Have you done any CT/MRI/ENT tests?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    title: "Past History & Impact",
    question: "On a scale of 0–10, how much does headache affect your work/life?",
    type: "range",
    options: ["0", "10"],
  },
  {
    title: "Past History & Impact",
    question: "Do you currently do yoga, physio, or stress-relief exercises?",
    type: "radio",
    options: ["Yes", "No"],
  }
];

const AssignmentPage = () => {
  const [step, setStep] = useState("welcome");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});

  const startQuiz = () => setStep("quiz");
  const goNext = () => (
    current < questions.length - 1
      ? setCurrent(current + 1)
      : setStep("complete")
  );

  const goPrev = () => current > 0 && setCurrent(current - 1);
  const handleAnswer = (answer) => setAnswers({...answers, [current]: answer});
  const handleComplete = async () => {
    try {
      // Format the answers to include both questions and answers
      const formattedAnswers = Object.keys(answers).map(index => {
        const questionIndex = parseInt(index);
        const question = questions[questionIndex];
        const selectedAnswers = answers[questionIndex];
        
        return {
          question: question.question,
          questionTitle: question.title,
          questionType: question.type,
          selectedOptions: selectedAnswers.map(answerIndex => question.options[answerIndex]),
          selectedOptionIndices: selectedAnswers
        };
      });

      // Prepare the data for the backend
      const assignmentData = {
        questions: JSON.stringify(questions),
        answers: JSON.stringify(formattedAnswers)
      };

      // Save to backend using authenticated API call
      const response = await authenticatedPost("/api/assignments/save", assignmentData);
      const data = await response.json();
      
      if (data.success) {
        setStep("complete");
      } else {
        console.error("Failed to save assignment:", data.error);
        toast.error("Failed to save assignment. Please try again.");
      }
    } catch (error) {
      console.error("Error saving assignment:", error);
      toast.error("An error occurred while saving your assignment. Please try again.");
    }
  };

  return (
    <div className="container-fluid">
      {step === "welcome" && <WelcomeScreen onStart={startQuiz} />}
      {step === "quiz" && (
        <QuizScreen
          questions={questions}
          current={current}
          answers={answers}
          setAnswer={handleAnswer}
          goNext={goNext}
          goPrev={goPrev}
          onComplete={handleComplete}
        />
      )}
      {step === "complete" && <CompletionScreen />}
    </div>
  );
}

export default AssignmentPage;