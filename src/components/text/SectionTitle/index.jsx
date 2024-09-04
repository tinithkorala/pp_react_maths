import classes from "./index.module.css";

const SectionTitle = ({ children, textAlign }) => {
  return (
    <h2 className={classes.sectionTitle} style={{ textAlign: textAlign }}>
      {children}
    </h2>
  );
};

export default SectionTitle;
