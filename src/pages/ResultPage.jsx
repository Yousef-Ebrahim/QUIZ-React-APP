import { useQuiz } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

function ResultPage() {
  const { userAnswers, questions } = useQuiz();
  const navigate = useNavigate();

  // calculate score
  const score = questions.reduce((total, question, index) => {
    return question.correct_answer === userAnswers[index] ? total + 1 : total;
  }, 0);

  return (
    <div className="min-h-screen bg-base-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Results</h1>

      {/* answers review */}
      {questions.map((q, index) => (
        <div
          key={index}
          className="bg-base-200 p-6 rounded-xl shadow mb-4 w-full max-w-xl"
        >
          <h2 className="font-semibold">{q.question}</h2>

          <p
            className={`mt-2 p-2 rounded ${
              userAnswers[index] === q.correct_answer
                ? "bg-green-400 text-white"
                : "bg-red-400 text-white"
            }`}
          >
            Your answer: {userAnswers[index]}
            {"  "}| Correct: {q.correct_answer}
          </p>
        </div>
      ))}

      {/* score */}
      <h1 className="text-3xl font-bold mt-6">
        Your Score: {score} / {questions.length}
      </h1>

      <button
        className="btn btn-success btn-lg mt-6"
        onClick={() => navigate("/")}
      >
        Try Again
      </button>
    </div>
  );
}

export default ResultPage;
