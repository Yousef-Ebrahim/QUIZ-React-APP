// Application routes

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import QuizPage from "../pages/QuizPage";
import ResultPage from "../pages/ResultPage";
import Layout from "../components/Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/quiz"
          element={
            <Layout>
              <QuizPage />
            </Layout>
          }
        />

        <Route
          path="/result"
          element={
            <Layout>
              <ResultPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
