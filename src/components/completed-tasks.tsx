import * as React from "react";
import { useRecoilValue } from "recoil";
import "../App.css";
import { completedTasksAtom } from "../atoms";

export const CompletedTasks = () => {
  const completedTasks = useRecoilValue(completedTasksAtom);

  // console.log()

  const renderCompletedTasks = () => {
    return completedTasks.map((task) => {
      return <li>{task}</li>;
    });
  };

  return (
    <div className="container">
      CompletedTasks: [insert count here]
      {renderCompletedTasks()}
    </div>
  );
};
