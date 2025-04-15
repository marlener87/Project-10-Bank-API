import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const user = useSelector((state) => state.auth.user);

    const isAuthenticated = user?.email !== null; // confirme que l'utilisateur est bien authentifié

    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;