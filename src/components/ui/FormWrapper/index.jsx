import classes from "./index.module.css";

const FormWrapper = ({ children }) => {
  return <div className={classes["form-wrapper"]}>{children}</div>;
};

export default FormWrapper;
