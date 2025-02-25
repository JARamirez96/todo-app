import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

const Description = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onViewDetails = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
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
  );
};

export default Description;
