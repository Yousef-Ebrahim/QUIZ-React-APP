import { useState, useEffect } from "react";
import { LampDesk, Flame, Zap, Skull, Brain } from "../../src/icons";
import { useNavigate } from "react-router-dom";
import { useCountdown } from "../Hooks/useCountdown";
export default function Home() {
  const [difficulty, setDifficulty] = useState("");
  const [countdownActive, setCountdownActive] = useState(false);
  const navigate = useNavigate();
  const base = "btn btn-lg gap-2 transition-all duration-300 min-w-[140px]";

  const count = useCountdown(
    5,
    () => navigate(`/quiz?difficulty=${difficulty}`),
    countdownActive,
  );

  console.log(count);

  const handleStart = () => {
    if (!difficulty) return;
    setCountdownActive(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex flex-col">
      {/* Content */}
      <div className="flex flex-1 justify-center items-center">
        <div className="bg-white bg-opacity-80 backdrop-blur-md p-10 rounded-xl shadow-2xl flex flex-col items-center gap-6 text-center max-w-lg w-full">
          {/* Title */}
          <h1 className="font-bebas text-5xl flex items-center gap-2">
            <LampDesk size={40} color="blue" />
            <span className="bg-gradient-to-r from-blue-500 to-green-400 text-transparent bg-clip-text">
              IQ
            </span>{" "}
            Quiz Challenge
          </h1>
          <h3 className="font-bebas text-3xl text-gray-700">
            Test your knowledge in 60 seconds
          </h3>

          {/* Countdown */}
          {countdownActive ? (
            <div className="text-xl text-gray-600">
              Get Ready...
              <div className="text-7xl font-bold animate-pulse text-red-400">
                {count}
              </div>
            </div>
          ) : (
            <>
              {/* Difficulty Buttons */}
              <div className="flex flex-wrap gap-4 justify-center mt-4">
                <button
                  className={`${base} ${
                    difficulty === "easy"
                      ? "btn-success scale-105 shadow-lg bg-blue-400"
                      : "btn-outline"
                  }`}
                  onClick={() => setDifficulty("easy")}
                >
                  <Zap size={20} /> EASY
                </button>

                <button
                  className={`${base} ${
                    difficulty === "medium"
                      ? "btn-warning scale-105 shadow-lg bg-green-400"
                      : "btn-outline"
                  }`}
                  onClick={() => setDifficulty("medium")}
                >
                  <Flame size={20} /> MEDIUM
                </button>

                <button
                  className={`${base} ${
                    difficulty === "hard"
                      ? "btn-error scale-105 shadow-lg bg-red-400"
                      : "btn-outline"
                  }`}
                  onClick={() => setDifficulty("hard")}
                >
                  <Skull size={20} /> HARD
                </button>
              </div>

              {/* Placeholder Message */}
              {!difficulty && (
                <p className="text-red-500 mt-2 font-semibold animate-pulse">
                  Please choose exam difficulty
                </p>
              )}

              {/* Start Button */}
              <button
                disabled={!difficulty}
                onClick={handleStart}
                className={`btn btn-success btn-lg mt-6 transition-all duration-300 ${
                  !difficulty
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-105"
                }`}
              >
                <Brain /> START CHALLENGE
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
