import classes from "./index.module.css";

const PageTitle = ({ children, textAlign }) => {
  return (
    <h4 className={classes.pageTitle} style={{ textAlign: textAlign }}>
      {children}
    </h4>
  );
};

export default PageTitle;
