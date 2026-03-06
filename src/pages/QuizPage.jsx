import React from "react";
import { useSearchParams } from "react-router-dom";
function QuizPage() {
  const [searchParams] = useSearchParams();
  const difficulty = searchParams.get("difficulty");
  console.log(difficulty);
  return <div>QuizPage</div>;
}

export default QuizPage;
