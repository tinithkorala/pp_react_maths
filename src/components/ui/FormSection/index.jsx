import classes from "./index.module.css";

const FormSection = ({ children }) => {
  return <div className={classes["form-section"]}>{children}</div>;
};

export default FormSection;
