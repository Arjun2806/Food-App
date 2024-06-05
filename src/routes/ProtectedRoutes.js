import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { GiConsoleController } from "react-icons/gi";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  console.log(user)
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};