// Fetch quiz questions from API

import api from "../services/api";

export const getQuestions = async (difficulty) => {
  try {
    const res = await api.get(
      `/api.php?amount=10&difficulty=${difficulty}&type=multiple`,
    );

    return res.data.results;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};
