import React, { useState } from "react";
import "./AddTask.css";
import { useDispatch } from "react-redux";
import { v4 as uuid4 } from "uuid";
import { addTask } from "../features/TaskSlice";
import Button from "@mui/material/Button";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid4(),
      title,
      description,
      status,
    };
    dispatch(addTask(newTask));
    setTitle("");
    setDescription("");
    setStatus("To Do");
  };
  return (
    <div className="add-task-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Task Management</h2>

        <div className="input-container">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Task Name"
            required
          />
        </div>

        <div className="description-container">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task Description"
            rows="3"
          ></textarea>
        </div>

        <div className="select-container">
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <Button
          variant="contained"
          color="secondary"
          className="submit-button"
          type="submit"
        >
          Add Task
        </Button>
      </form>
    </div>
  );
};

export default AddTask;
