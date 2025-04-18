// import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/TaskSlice";
import "./EditTask.css";

export default function BasicModal({ task }) {
  const theme = useTheme();
  const mobile = useMediaQuery("(min-width:300px) and (max-width:800px)");
  const style = {
    position: "absolute",
    top: "50%",
    left: mobile ? "50%" : "30%",
    transform: "translate(-50%, -50%)",
    width: mobile ? "70%" : 400,
    height: mobile ? "auto" : 450,
    borderRadius: "16px",
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 15,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editTask({ id: task.id, title, description, status }));
    setOpen(false);
  };

  return (
    <div className="modal-container">
      <Button
        size="small"
        variant="contained"
        color="success"
        onClick={handleOpen}
      >
        Edit
      </Button>
      <Modal
        sx={{ padding: "0px" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="main-container-edit">
            <div className="edit-task-container">
              <form className="edit-form-container">
                <h2>Edit Task</h2>
                <div className="edit-input-container">
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Task Name"
                    required
                  />
                </div>

                <div className="edit-description-container">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Task Description"
                    rows="3"
                  ></textarea>
                </div>

                <div className="edit-select-container">
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div>
                  <Button
                    sx={{
                      margin: { xs: "5px", sm: "5px", md: "20px" },
                      fontSize: { xs: "10px", sm: "11px" },
                    }}
                    size="small"
                    variant="contained"
                    color="success"
                    className="save-button"
                    type="submit"
                    onClick={handleEdit}
                  >
                    Save
                  </Button>
                  <Button
                    sx={{
                      margin: { xs: "5px", sm: "5px", md: "20px" },
                      fontSize: { xs: "10px", sm: "11px" },
                    }}
                    size="small"
                    variant="contained"
                    color="error"
                    className="cancel-button"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
