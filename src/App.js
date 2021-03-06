import React from "react";
import useQuestions from "./hooks/useQuestions";
import "./App.css";

function App() {
  const [questions, setQuestionCompleted] = useQuestions();

  return (
    <div className="App">
      <h1>Proust Prompts</h1>
      {questions.map((question) => (
        <div className="question">
          <input
            type="checkbox"
            checked={question.completed}
            onChange={() =>
              setQuestionCompleted(question.id, !question.completed)
            }
          />
          <p>{question.question}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
