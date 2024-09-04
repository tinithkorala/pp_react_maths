import { Typography } from "@mui/material";
import classes from "./index.module.css";

const ChartHeading = ({ children }) => {
  return (
    <Typography variant="h5" className={classes["chart-name"]}>
      {children}
    </Typography>
  );
};

export default ChartHeading;
