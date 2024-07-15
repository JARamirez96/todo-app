import { Box, Button, Stack, Typography } from "@mui/material";
import classes from "./TodoInfo.module.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todos";
import StatusButton from "./Buttons/StatusButton";
import { Delete as DeleteIcon } from "@mui/icons-material";

const itemVariants = {
  hidden: { opacity: 0, x: 15 },
  visible: { opacity: 1, x: 0 },
};

function TodoInfo({ id, title, status, date, image, description }) {
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
    <motion.li
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className={classes.todo}
      key={id}
    >
      <Box sx={{ padding: "0 1rem" }}>
        <header className={classes.header}>
          <div className={classes.imageSection}>
            <img src={image.src} height="100" alt="task_image" />
          </div>
          <Box gap={1} className={classes.infoSection}>
            <div className={classes.infoHeader}>
              <Typography variant="h6">{title}</Typography>
              <div>
                <Stack direction="row" spacing={2}>
                  {statusList.map((statusButton) => (
                    <React.Fragment key={statusButton.status + id}>
                      {status !== statusButton.status ? (
                        <StatusButton
                          status={statusButton.status}
                          color={statusButton.color}
                          onChangeStatus={() =>
                            changeStatusHandler(statusButton.status)
                          }
                        >
                          {statusButton.status}
                        </StatusButton>
                      ) : null}
                    </React.Fragment>
                  ))}
                </Stack>
              </div>
            </div>

            <span
              id="task_status"
              className={getStatusClass(status) + " " + classes.task_status}
            >
              {status}
            </span>
            <Box
              sx={{ display: "flex", justifyContent: "space-between" }}
              alignItems="center"
            >
              <Typography variant="body1">Complete until {date}</Typography>
              <Box>
                <Button
                  size="small"
                  color="error"
                  variant="contained"
                  onClick={deleteTaskHandler}
                >
                  <DeleteIcon /> Delete Task
                </Button>
              </Box>
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
              <Typography mt={1} variant="body2" align="justify">
                {description}
              </Typography>
            )}
          </>
        )}
      </Box>
    </motion.li>
  );
}

export default TodoInfo;
