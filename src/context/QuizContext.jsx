import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [difficulty, setDifficulty] = useState("");
  const [countdown, setCountdown] = useState(5);
  const [countdownActive, setCountdownActive] = useState(false);

  const value = {
    difficulty,
    setDifficulty,
    countdown,
    setCountdown,
    countdownActive,
    setCountdownActive,
  };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}
