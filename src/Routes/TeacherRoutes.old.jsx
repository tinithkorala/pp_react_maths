import { Route, Routes } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

import TeacherDashboar from "../Pages/teacher/Dashboard";
import PerformanceList from "../Pages/teacher/PerformanceList";

const sidebarMenuList = [
  {
    id: 1,
    title: "Dashboard",
    path: "",
    icon: <DashboardOutlinedIcon />,
    element: <TeacherDashboar />,
  },
  {
    id: 2,
    title: "Performance List",
    path: "performance-list",
    icon: <SchoolOutlinedIcon />,
    element: <PerformanceList />,
  },
  {
    id: 3,
    title: "Topic Performance",
    path: "topic-performance",
    icon: <LocalLibraryOutlinedIcon />,
    element: <h4>Topic Performance Content</h4>,
  },
];

function TeacherRoutes() {
  return (
    <Layout sidebarMenuList={sidebarMenuList}>
      <Routes>
        {sidebarMenuList?.map((menuItem) => (
          <Route
            key={menuItem?.id}
            path={menuItem?.path}
            element={menuItem?.element}
          />
        ))}
      </Routes>
    </Layout>
  );
}

export default TeacherRoutes;
