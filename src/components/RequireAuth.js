import useAuth from "../hooks/useAuth";
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import Unauthorized from "./Unauthorized";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : (
                <main>
                    <h1>Unauthorized!</h1>
                </main>
            )
    )
}

export default RequireAuth;