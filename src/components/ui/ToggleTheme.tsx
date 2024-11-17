import { useEffect, useState } from "react";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";

interface ToggleThemeProps {}

const ToggleTheme = ({}: ToggleThemeProps) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Aplicar o tema com base no estado inicial
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);

		setIsDarkMode(isDark);

		// Adicionar ou remover a classe "dark" na inicialização
		if (isDark) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}

		if (!savedTheme) {
			localStorage.setItem("theme", isDark ? "dark" : "light");
		}
	}, [localStorage]);

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);

		if (isDarkMode) {
			localStorage.setItem("theme", "light");
			document.documentElement.classList.remove("dark");
		} else {
			localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
		}
	};

	return (
		<div className="transition-all duration-500 flex items-center justify-center bg-white text-black  dark:bg-gray-900 dark:text-white ">
			<label className="relative inline-flex items-center cursor-pointer" htmlFor="theme-toggle">
				<input type="checkbox" id="theme-toggle" className="sr-only" checked={isDarkMode} onChange={() => toggleTheme()} />
				<div className="w-12 h-6 bg-gray-200 dark:bg-gray-800 rounded-full shadow-inner flex items-center transition-all duration-300">
					<div
						className={`w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transform transition-transform duration-300 ${
							isDarkMode ? "translate-x-6" : "translate-x-0"
						}`}
					>
						{isDarkMode ? <MoonIcon size="xl" className="dark:text-black" /> : <SunIcon size="xl" fill="#fbbf24" />}
					</div>
				</div>
			</label>
		</div>
	);
};

export { ToggleTheme };
