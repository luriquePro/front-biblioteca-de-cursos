import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigationStore } from "../../store/navigationStore";

const NavigationTracker = () => {
	if (typeof window === "undefined") return null;

	const { pathname } = useLocation();
	const setAtualPage = useNavigationStore(state => state.setAtualPage);

	useEffect(() => {
		setAtualPage(pathname);
	}, [pathname, setAtualPage]);

	return null;
};

export { NavigationTracker };
