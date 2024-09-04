import { Outlet, useLocation } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { useEffect, useState } from "react";

const sidebarMenuList = [
  {
    id: 1,
    title: "Dashboard",
    path: "/student",
    icon: <DashboardOutlinedIcon />,
  },
  {
    id: 2,
    title: "Subtopic List",
    path: "/student/subtopic-list",
    icon: <SchoolOutlinedIcon />,
  },
  {
    id: 3,
    title: "Practice Space",
    path: "/student/practice-space",
    icon: <LocalLibraryOutlinedIcon />,
  },
];

function TeacherRoutes() {
  const location = useLocation();
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    const foundItem = sidebarMenuList.find(
      (item) => item.path === location.pathname
    );
    if (foundItem) {
      setSelectedItemId(foundItem.id);
    } else {
      setSelectedItemId(null);
    }
  }, [location.pathname]);

  return (
    <Layout sidebarMenuList={sidebarMenuList} selectedItemId={selectedItemId}>
      <Outlet />
    </Layout>
  );
}

export default TeacherRoutes;
