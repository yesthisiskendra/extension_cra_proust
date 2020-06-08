import { useState } from "react";
import startingQuestions from "../questions";

const useQuestions = () => {
  const [questions, updateQuestions] = useState(startingQuestions);
  const setQuestionCompleted = (id, completed) => {
    const questionIdx = questions.findIndex((question) => question.id === id);
    const newQuestions = [...questions];
    newQuestions[questionIdx].completed = completed;
    updateQuestions(newQuestions);
  };
  return [questions, setQuestionCompleted];
};
export default useQuestions;
