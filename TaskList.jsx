import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodo } from "../features/TaskSlice";
import "./TaskList.css";
// import EditTask from "./EditTask";
import { deleteTask } from "../features/TaskSlice";
import BasicModal from "./Model";
import Button from "@mui/material/Button";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  if (loading) {
    return <p> Taasks loading.........</p>;
  }

  if (error) {
    return <p>There is an error{error}</p>;
  }

  return (
    <div className="task-container">
      <h2>Tasks</h2>
      <div className="list-container">
        {tasks.map((task, index) => (
          <li key={index}>
            <p>
              <strong>{task.title}</strong>
            </p>
            {task.description && <p>{task.description}</p>}
            <p>Status: {task.status}</p>
            <div className="buttons-div">
              {/* <EditTask task={task}></EditTask> */}
              <BasicModal task={task}></BasicModal>
              <Button
                sx={{ marginTop: "10px" }}
                className="delete-button"
                size="small"
                variant="contained"
                color="error"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
