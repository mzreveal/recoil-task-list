import React from "react";
import { AddTask } from "./components/add-task";
import { CompletedTasks } from "./components/completed-tasks";
import { Title } from "./components/title";
import "./App.css";

function App() {
  return (
    <div className="parent-container">
      <Title />
      <AddTask />
      <CompletedTasks />
    </div>
  );
}

export default App;
