import { useSelector } from "react-redux";
import { selectUser } from "../features/slices/authSlice";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedStudentRoutes = () => {
  const user = useSelector(selectUser);

  if (!(user.role === "student")) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedStudentRoutes;
