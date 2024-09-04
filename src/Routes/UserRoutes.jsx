import { useSelector } from "react-redux";
import { selectUser } from "../features/slices/authSlice";
import { Navigate, Outlet } from "react-router-dom";

const UserRoutes = () => {
  const user = useSelector(selectUser);

  if (user?.role !== "user" && user?.isPhotoUploaded === true) {
    if (user?.role === "teacher") {
      return <Navigate to="/teacher" replace/>
    } else if (user?.role === "student") {
      return <Navigate to="/student" replace/>
    }
  }

  return <Outlet />;
};

export default UserRoutes;
