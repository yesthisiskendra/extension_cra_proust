import { useState } from "react";
import startingQuestions from "../questions";

// const getQuestions = () => {
//   return questions;
//   const localQuestions = window.localStorage.getItem("localQuestions");
//   if (!localQuestions) {
//     return questions;
//   }
//   return JSON.parse(questions);
// };
const useQuestions = () => {
  const [questions, setTodos] = useState(startingQuestions);
  const updateQuestions = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    window.localStorage.setItem("todos", stringifiedTodos);
    setTodos(newTodos);
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
