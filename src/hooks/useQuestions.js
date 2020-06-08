import { useState } from "react";
import startingQuestions from "../questions";

const getQuestions = () => {
  const localQuestions = window.localStorage.getItem("questions");
  if (!localQuestions) {
    const stringifiedQuestions = JSON.stringify(startingQuestions);
    window.localStorage.setItem("questions", stringifiedQuestions);
    return startingQuestions;
  }
  return JSON.parse(localQuestions);
};

const useQuestions = () => {
  const [questions, saveQuestions] = useState(getQuestions());

  const updateQuestions = (newQuestions) => {
    const stringifiedQuestions = JSON.stringify(newQuestions);
    window.localStorage.setItem("questions", stringifiedQuestions);
    saveQuestions(newQuestions);
  };

  const setQuestionCompleted = (id, completed) => {
    const questionIdx = questions.findIndex((question) => question.id === id);
    const newQuestions = [...questions];
    newQuestions[questionIdx].completed = completed;
    updateQuestions(newQuestions);
  };
  return [questions, setQuestionCompleted];
};
export default useQuestions;
