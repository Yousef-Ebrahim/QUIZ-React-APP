// Root component

import AppRouter from "./routes/AppRouter";
import { useQuiz } from "./context/QuizContext";

function App() {
  const { theme, setTheme } = useQuiz();

  // Toggle dark / light theme
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div data-theme={theme} className="min-h-screen">
      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 px-4 py-2 rounded-full bg-base-200 hover:bg-base-300 shadow-lg transition"
      >
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>

      <AppRouter />
    </div>
  );
}

export default App;
