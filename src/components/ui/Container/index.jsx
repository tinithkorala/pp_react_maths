import classes from "./index.module.css";

const Container = ({ flexDirection, children }) => {
  return (
    <div
      className={`${classes?.container} ${
        flexDirection === "row" ? classes["flex-row"] : classes["flex-column"]
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
