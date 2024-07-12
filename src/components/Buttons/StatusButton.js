import { Button } from "@mui/material";

function StatusButton({ children, color, status, onChangeStatus }) {
  const changeTaskStatus = (status) => {
    onChangeStatus(status);
  };

  return (
    <Button
      sx={{ width: "7rem" }}
      variant="contained"
      size="small"
      color={color}
      onClick={() => changeTaskStatus(status)}
    >
      {children}
    </Button>
  );
}

export default StatusButton;
