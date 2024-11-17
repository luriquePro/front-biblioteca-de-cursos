import { create } from "zustand";

interface NavigationState {
	lastPage: string | null;
	atualPage: string;
	setAtualPage: (page: string) => void;
}

const useNavigationStore = create<NavigationState>((set, get) => ({
	lastPage: null,
	atualPage: "/",
	setAtualPage: (page: string) => {
		const { atualPage: oldActualPage } = get();
		if (oldActualPage !== page) {
			set({ lastPage: oldActualPage, atualPage: page });
		}
	},
}));

export { useNavigationStore };
