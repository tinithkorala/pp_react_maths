import classes from "./index.module.css";
import { Button } from "@mui/material";

const MyButton = ({
  children,
  type,
  onClick = () => {},
  variant,
  size,
  fullWidth,
  style,
  startIcon,
  disabled
}) => {
  return (
    <Button
      className={classes.button}
      type={type || 'button'}
      onClick={onClick}
      variant={variant}
      fullWidth={fullWidth || false}
      size={size || "large"}
      style={style}
      startIcon={startIcon}
      disabled={disabled || false}
    >
      {children}
    </Button>
  );
};

export default MyButton;
