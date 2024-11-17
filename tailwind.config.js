const pallet = {
	black: {
		100: "#d3d3d3",
		200: "#a8a8a8",
		300: "#7c7c7c",
		400: "#515151",
		500: "#252525",
		600: "#1e1e1e",
		700: "#161616",
		800: "#0f0f0f",
		900: "#070707",
	},
	green: {
		100: "#d4f6e5",
		200: "#a8eccb",
		300: "#7de3b0",
		400: "#51d996",
		500: "#26d07c",
		600: "#1ea663",
		700: "#177d4a",
		800: "#0f5332",
		900: "#082a19",
	},
	blue: {
		100: "#d4e9f6",
		200: "#a8d3ec",
		300: "#7dbce3",
		400: "#51a6d9",
		500: "#2690d0",
		600: "#1e73a6",
		700: "#17567d",
		800: "#0f3a53",
		900: "#081d2a",
	},
};

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			screens: {
				xs: "480px",
			},
			colors: {
				primary: {
					light: pallet.blue[100],
					300: pallet.blue[300],
					default: pallet.blue[500],
					700: pallet.blue[700],
					dark: pallet.blue[900],
				},
				secondary: {
					light: pallet.green[100],
					300: pallet.green[300],
					default: pallet.green[500],
					700: pallet.green[700],
					dark: pallet.green[900],
				},
				tertiary: {
					light: pallet.black[100],
					300: pallet.black[300],
					default: pallet.black[500],
					700: pallet.black[700],
					dark: pallet.black[900],
				},
			},
		},
	},
	plugins: [],
};
