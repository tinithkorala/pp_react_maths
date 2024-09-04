import { CircularProgress, Typography } from "@mui/material";
import classes from "./index.module.css";

const Loader = ({ text }) => {
  return (
    <div className={classes.overlay}>
      <CircularProgress color="primary" size={80} thickness={4} />
      {text && (
        <Typography variant="body1" className={classes.text}>
          {text}
        </Typography>
      )}
    </div>
  );
};

export default Loader;
