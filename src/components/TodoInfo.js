import { Box, Button, Stack, Typography } from "@mui/material";
import classes from "./TodoInfo.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todos";
import StatusButton from "./Buttons/StatusButton";
import { Delete as DeleteIcon } from "@mui/icons-material";

const style = {
  border: "1px solid white",
  borderRadius: "5px",
  maxHeight: "5rem",
  width: "9rem",
  height: "100vh",
};

function TodoInfo({ id, title, status, date, description }) {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);

  const onViewDetails = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const changeStatusHandler = (status) => {
    dispatch(todoActions.changeStatus({ id, status }));
  };

  const deleteTaskHandler = () => {
    dispatch(todoActions.removeFromList(id));
  };

  const statusList = [
    { status: "In Process", color: "info" },
    { status: "Completed", color: "success" },
    { status: "Failed", color: "error" },
  ];

  function getStatusClass(status) {
    switch (status) {
      case "In Process":
        return classes.in_process;
      case "Failed":
        return classes.failed;
      default:
        return classes.completed;
    }
  }

  return (
    <li className={classes.todo}>
      <Box sx={{ padding: "0 1rem" }}>
        <header className={classes.header}>
          <div className={classes.imageSection}>
            <Box textAlign="start">
              <Button
                size="small"
                color="error"
                variant="contained"
                sx={{ width: "1.9rem", minWidth: "0" }}
                onClick={deleteTaskHandler}
              >
                <DeleteIcon />
              </Button>
            </Box>
            <span style={{ width: "1rem" }}></span>
            <Box sx={style}>Image</Box>
          </div>
          <Box gap={1} className={classes.infoSection}>
            <div className={classes.infoHeader}>
              <Typography variant="h5">{title}</Typography>
              <span className={getStatusClass(status)}>{status}</span>
            </div>
            <Box
              sx={{ display: "flex", justifyContent: "space-between" }}
              alignItems="center"
            >
              <Typography variant="body1">Complete until {date}</Typography>
              <div>
                <Stack direction="row" spacing={2}>
                  {statusList.map((statusButton) => (
                    <>
                      {status !== statusButton.status ? (
                        <StatusButton
                          key={statusButton.status + id}
                          status={statusButton.status}
                          color={statusButton.color}
                          onChangeStatus={() =>
                            changeStatusHandler(statusButton.status)
                          }
                        >
                          {statusButton.status}
                        </StatusButton>
                      ) : null}
                    </>
                  ))}
                </Stack>
              </div>
            </Box>
          </Box>
        </header>
        {description !== "" && (
          <>
            <Typography
              align="left"
              sx={{ marginTop: "10px", cursor: "pointer", width: "9rem" }}
              onClick={onViewDetails}
            >
              Description{" "}
              <motion.span
                style={{ display: "inline-block", width: "1rem" }}
                animate={{ rotate: isExpanded ? 180 : 0 }}
              >
                &#9650;
              </motion.span>
            </Typography>
            {isExpanded && (
              <Typography variant="body2" align="justify">
                {description}
              </Typography>
            )}
          </>
        )}
      </Box>
    </li>
  );
}

export default TodoInfo;
