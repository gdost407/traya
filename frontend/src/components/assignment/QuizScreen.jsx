import Question from "./Question";
import ProgressBar from "./ProgressBar";
import Navigation from "./Navigation";

export default function QuizScreen({
  questions, current, answers, setAnswer, goNext, goPrev, onComplete
}) {
  const isLast = current === questions.length - 1;
  const hasAnswer = answers[current] !== undefined && answers[current].length !== 0;

  return (
    <div className="row min-vh-100" style={{background: "#c3cad2"}}>
      <div className="col-sm-4 col-12">
        <ProgressBar 
          progress={((current + 1) / questions.length) * 100} 
          canPrev={current > 0}
          onPrev={goPrev}
        />
      </div>
      <div className="col-sm-8 col-12 py-5">
        <div className="card position-relative" style={{minHeight: "37rem"}}>
          <Question
            question={questions[current]}
            index={current}
            answer={answers[current]}
            onAnswer={setAnswer}
          />
          
          <Navigation
            canPrev={current > 0}
            canNext={hasAnswer}
            onPrev={goPrev}
            onNext={isLast ? onComplete : goNext}
            nextText={isLast ? "Complete Test" : "Next"}
          />
        </div>
        
      </div>
    </div>
  );
}
