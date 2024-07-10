import { Box, Typography } from "@mui/material";
import classes from "./TodoInfo.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

const style = {
  border: "1px solid white",
  borderRadius: "5px",
  maxHeight: "5rem",
  width: "10rem",
  height: "100vh",
};

function TodoInfo({ title, status, date, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const onViewDetails = () => {
    setIsExpanded((prevState) => !prevState);
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
            <Typography variant="body1">Complete until {date}</Typography>
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
