import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import QuizPage from "../pages/QuizPage";
import ResultPage from "../pages/ResultPage";
import Navbar from "../components/Navbar";

export default function AppRouter() {
  return (
    <BrowserRouter>        <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}
