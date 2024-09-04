import SideBar from "../../layouts/SideBar";
import Content from "../../layouts/Content";
import classes from "./index.module.css";

const Layout = ({ children, sidebarMenuList, selectedItemId }) => {
  return (
    <div className={classes["layout"]}>
      <SideBar
        sidebarMenuList={sidebarMenuList}
        selectedItemId={selectedItemId}
      />
      <div className={classes["content"]}>
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default Layout;
