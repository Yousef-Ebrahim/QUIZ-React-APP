import { createContext, useState, useContext } from "react";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [difficulty, setDifficulty] = useState("");
  const [theme, setTheme] = useState("dark");
  const [userAnswers, setUserAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);

  const value = {
    difficulty,
    setDifficulty,
    theme,
    setTheme,
    userAnswers,
    setUserAnswers,
    questions,
    setQuestions,
  };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}
export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used inside QuizProvider");
  }
  return context;
}
