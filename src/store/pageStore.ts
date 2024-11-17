import { create } from "zustand";

interface PageState {
	atualPage: string | null;
	setAtualPage: (page: string) => void;
}

const usePageStore = create<PageState>(set => ({
	atualPage: null,
	setAtualPage: (page?: string) => {
		set({ atualPage: page ?? null });
	},
}));

export { usePageStore };
