import { Box, Button, Stack, Typography } from "@mui/material";
import classes from "./TodoInfo.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todos";

const style = {
  border: "1px solid white",
  borderRadius: "5px",
  maxHeight: "5rem",
  width: "10rem",
  height: "100vh",
};

function TodoInfo({ id, title, status, date, description }) {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);

  const onViewDetails = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const onChangeStatus = (status) => {
    dispatch(todoActions.changeStatus({ id, status }));
  };

  return (
    <li className={classes.todo}>
      <Box sx={{ padding: "0 1rem" }}>
        <header className={classes.header}>
          <div className={classes.imageSection}>
            <Box sx={style}>Image</Box>
          </div>
          <Box gap={1} className={classes.infoSection}>
            <div className={classes.infoHeader}>
              <Typography variant="h5">{title}</Typography>
              <Typography variant="body1">{status}</Typography>
            </div>
            <Box
              sx={{ display: "flex", justifyContent: "space-between" }}
              alignItems="center"
            >
              <Typography variant="body1">Complete until {date}</Typography>
              <div>
                <Stack direction="row" spacing={2}>
                  {status !== "In Process" && (
                    <Button
                      variant="contained"
                      size="small"
                      color="info"
                      onClick={() => onChangeStatus("In Process")}
                    >
                      In Process
                    </Button>
                  )}
                  {status !== "Completed" && (
                    <Button
                      variant="contained"
                      size="small"
                      color="success"
                      onClick={() => onChangeStatus("Completed")}
                    >
                      Completed
                    </Button>
                  )}
                  {status !== "Failed" && (
                    <Button
                      variant="contained"
                      size="small"
                      color="error"
                      onClick={() => onChangeStatus("Failed")}
                    >
                      Failed
                    </Button>
                  )}
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
