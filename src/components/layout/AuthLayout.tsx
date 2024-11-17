import { Outlet } from "react-router-dom";
import { Header } from "../app/Header";
import { NavigationTracker } from "../utils/NavigationTracker";

const AuthLayout = () => {
	return (
		<section className="min-w-screen min-h-screen bg-white">
			<Header variant="tertiary" border="b-2-black" />
			<main>
				<NavigationTracker />
				<Outlet />
			</main>
		</section>
	);
};

export { AuthLayout };
