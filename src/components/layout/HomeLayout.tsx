import { Outlet } from "react-router-dom";
import { Header } from "../app/Header";
import { NavigationTracker } from "../utils/NavigationTracker";

const HomeLayout = () => {
	return (
		<section className="min-w-screen min-h-screen bg-white">
			<Header border="b-2-black" />
			<main>
				<NavigationTracker />
				<Outlet />
			</main>
		</section>
	);
};

export { HomeLayout };
