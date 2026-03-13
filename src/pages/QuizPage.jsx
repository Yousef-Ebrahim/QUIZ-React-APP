import { useSearchParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { getQuestions } from "../services/quizServices";
import { useCountdown } from "../Hooks/useCountdown";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { userAnswers, setUserAnswers, questions, setQuestions } = useQuiz();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const difficulty = searchParams.get("difficulty");
  const progress =
    questions.length > 0 ? (currentQuestion / questions.length) * 100 : 0;
  useEffect(() => {
    async function loadQuestions() {
      const data = await getQuestions(difficulty);
      setQuestions(data);
      setUserAnswers([]);
      setCurrentQuestion(0);
    }
    loadQuestions();
  }, [difficulty]);

  const count = useCountdown(
    60,
    () => navigate(`/result?difficulty=${difficulty}`),
    true,
  );

  const answers = useMemo(() => {
    if (questions.length === 0) return [];
    return [
      ...questions[currentQuestion].incorrect_answers,
      questions[currentQuestion].correct_answer,
    ].sort(() => Math.random() - 0.5);
  }, [questions, currentQuestion]);

  function handleAnswer(answer) {
    setUserAnswers((prev) => {
      const copy = [...prev];
      copy[currentQuestion] = answer;

      return copy;
    });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      navigate(`/result?difficulty=${difficulty}`);
    }
  }
  if (questions.length === 0) {
    return <div className="text-center mt-20">LOADING QUESTIONS..</div>;
  }

  return (
    <div className="min-h-screen bg-base-100 p-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-110">
          <h3 className="text-2xl font-bold uppercase">{difficulty}</h3>
          <div className="flex flex-col items-center">
            <p className="text-sm opacity-70">Timer</p>

            <div className="text-3xl font-bold text-error bg-base-200 px-4 py-2 rounded-lg shadow">
              {count}
            </div>
          </div>

          <div className="mb-6 w-full">
            <div className="flex justify-between text-sm mb-2">
              <span>
                Question {currentQuestion} / {questions.length}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>

            <div className="w-full bg-base-300 rounded-full h-3 mb-6">
              <div
                className="bg-primary h-3 rounded-full transition-all"
                style={{
                  width: `${(currentQuestion / questions.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </header>

        <div className="bg-base-200 p-6 rounded-xl shadow">
          <p className="text-sm text-base-content/60 mb-2">
            Question {currentQuestion + 1}
          </p>
          <h2 className="text-xl font-semibold mb-4">
            {questions[currentQuestion].question}
          </h2>

          {answers.map((answer) => (
            <button
              key={answer}
              onClick={() => handleAnswer(answer)}
              className={`block w-full text-left p-3 mb-3 rounded transition-colors
  ${
    userAnswers[currentQuestion] === answer
      ? "bg-base-400 text-white"
      : "bg-base-100 hover:bg-base-200"
  }`}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
