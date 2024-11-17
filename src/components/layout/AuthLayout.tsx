import { Outlet } from "react-router-dom";
import { NavigationTracker } from "../utils/NavigationTracker";

const AuthLayout = () => {
	return (
		<>
			<NavigationTracker />
			<Outlet />
		</>
	);
};

export { AuthLayout };
