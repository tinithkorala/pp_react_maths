import { Paper as MuiPaper } from "@mui/material";
import classes from "./index.module.css";

const Paper = ({ children, styleList }) => {

  let classList = classes["paper"];

  if(children && styleList) {
    classList += ` ${classes[styleList]}`;
  }

  console.log(classList);

  return (
    <MuiPaper
      square={false}
      variant="elevation"
      elevation={1}
      className={classList}
    >
      {children}
    </MuiPaper>
  );
};

export default Paper;
