import classes from "./index.module.css";
import PageTitle from "../../text/PageTitle";
import PageSubTitle from "../../text/PageSubTitle";

const PageHeader = ({ pageTitle, pageSubTitle, textAlign }) => {
  return (
    <div
      className={classes["content-header"]}
      style={{ alignItems: textAlign || "left" }}
    >
      <PageTitle textAlign={textAlign || "left"}>{pageTitle}</PageTitle>
      <PageSubTitle textAlign={textAlign || "left"}>
        {pageSubTitle}
      </PageSubTitle>
    </div>
  );
};

export default PageHeader;
