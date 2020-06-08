import React, { useState } from "react";
import startingQuestions from "./questions";
import "./App.css";

function App() {
  const [questions, updateQuestions] = useState(startingQuestions);

  const setQuestionCompleted = (id, completed) => {
    const questionIdx = questions.findIndex((question) => question.id === id);
    const newQuestions = [...questions];
    newQuestions[questionIdx].completed = completed;
    updateQuestions(newQuestions);
  };

  return (
    <div className="App">
      <h1>Proust Prompts</h1>
      {questions.map((question) => (
        <div className="question">
          <p>{question.question}</p>
          <input
            type="checkbox"
            checked={question.completed}
            onChange={() =>
              setQuestionCompleted(question.id, !question.completed)
            }
          />
        </div>
      ))}
    </div>
  );
}

export default App;
