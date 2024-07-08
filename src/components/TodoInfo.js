import { Box, Typography } from "@mui/material";
import classes from "./TodoInfo.module.css";

const style = {
  border: "1px solid white",
  borderRadius: "5px",
  maxHeight: "5rem",
  width: "5rem",
  height: "100vh",
};

function TodoInfo({ title, status, description }) {
  return (
    <li className={classes.todo}>
      <Box sx={{ padding: "0 1rem" }}>
        <header className={classes.header}>
          <div className={classes.imageSection}>
            <Box sx={style}>Image</Box>
          </div>
          <Box className={classes.infoSection}>
            <p className={classes.title}>
              Title: <span>{title}</span>
            </p>
            <p>
              Status: <span>{status}</span>
            </p>
            <p>
              Date: <span>01/12/2024</span>
            </p>
          </Box>
        </header>
        <Typography margin={1} variant="body2" align="justify">
          {description}
        </Typography>
      </Box>
    </li>
  );
}

export default TodoInfo;
