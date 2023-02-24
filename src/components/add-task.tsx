import * as React from "react";
import { useRecoilState } from "recoil";
import { ongoingTasksAtom, textInputAtom } from "../atoms";
import "../App.css";

export const AddTask = () => {
  const [userInput, setUserInput] = useRecoilState(textInputAtom);
  const [ongoingTasks, setOngoingTasks] = useRecoilState(ongoingTasksAtom);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setOngoingTasks((oldTodoList) => [...oldTodoList, userInput]);
    setUserInput("");
  };

  const handleComplete = (elem: any) => {
    console.log(elem.target.value);
  };

  const renderOngoingTasks = () => {
    return ongoingTasks.map((task, idx) => {
      return (
        <div key={idx} onClick={(elem) => handleComplete(elem)}>
          {task}
        </div>
      );
    });
  };

  return (
    <div className="container">
      Add a Task:
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={(e) => handleSubmit(e)}>Add</button>
      {renderOngoingTasks()}
      {/* FIXME: Add todo component here */}
    </div>
  );
};
