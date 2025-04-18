import React from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import "./App.css";

const App = () => {
  return (
    <div className="main-container">
      <AddTask></AddTask>
      <TaskList></TaskList>
    </div>
  );
};

export default App;
