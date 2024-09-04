import classes from "./index.module.css";

const CardHeading = ({ children, textAlign }) => {
  return (
    <h4 className={classes.cardHeading} style={{ textAlign: textAlign }}>
      {children}
    </h4>
  );
};

export default CardHeading;
