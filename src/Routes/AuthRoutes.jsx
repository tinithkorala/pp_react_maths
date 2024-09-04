import { useSelector } from "react-redux";
import { selectUser, selectIsAuthenticate } from "../features/slices/authSlice";
import { Navigate, Outlet } from "react-router-dom";

function AuthRoutes() {
  const user = useSelector(selectUser);
  const isAuthenticate = useSelector(selectIsAuthenticate);

  if (isAuthenticate) {
    if (user?.role === "teacher") {
      return <Navigate to="/teacher" replace/>
    } else if (user?.role === "student") {
      return <Navigate to="/student" replace/>
    } else if (user?.role === "user") {
      return <Navigate to="/set-role" replace/>
    }
  }

  return <Outlet />;
}

export default AuthRoutes;
