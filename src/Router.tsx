import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "./components/layout/AuthLayout";
import { HomeLayout } from "./components/layout/HomeLayout";
import { ErrorPage404 } from "./errors/ErrorPage404";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <ErrorPage404 />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
	{
		path: "/auth",
		element: <AuthLayout />,
		children: [
			{
				path: "login",
				element: <Login />,
				// loader: redirectIfUser,
			},
			{
				path: "logout",
				// loader: NavigationTracker,
				// action: logoutUser,
			},
		],
	},
]);

export { router };
