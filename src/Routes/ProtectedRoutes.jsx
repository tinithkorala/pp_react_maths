import { useSelector } from "react-redux";
import { selectIsAuthenticate } from "../features/slices/authSlice";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isAuthenticate = useSelector(selectIsAuthenticate);

  if (!isAuthenticate) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
