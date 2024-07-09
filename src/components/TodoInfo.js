import { Box, Typography } from "@mui/material";
import classes from "./TodoInfo.module.css";

const style = {
  border: "1px solid white",
  borderRadius: "5px",
  maxHeight: "5rem",
  width: "10rem",
  height: "100vh",
};

function TodoInfo({ title, status, date, description }) {
  return (
    <li className={classes.todo}>
      <Box sx={{ padding: "0 1rem" }}>
        <header className={classes.header}>
          <div className={classes.imageSection}>
            <Box sx={style}>Image</Box>
          </div>
          <Box gap={1} className={classes.infoSection}>
            <div className={classes.infoHeader}>
              <span>{title}</span>
              <span>{status}</span>
            </div>
            <span>{date}</span>
            {description !== "" && <span>Additional Notes</span>}
          </Box>
        </header>
        {description !== "" && (
          <Typography sx={{ marginTop: "10px" }} variant="body2" align="justify">
            {description}
          </Typography>
        )}
      </Box>
    </li>
  );
}

export default TodoInfo;
