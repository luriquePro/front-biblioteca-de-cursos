import { cva, VariantProps } from "class-variance-authority";
import React from "react";

interface SunIconProps extends React.SVGAttributes<HTMLOrSVGElement>, VariantProps<typeof SunIconVariants> {}

const SunIconVariants = cva("", {
	variants: {
		size: {
			default: "h-1 w-1",
			sm: "h-3 w-3",
			lg: "h-5 w-5",
			xl: "h-6 w-6",
			"2xl": "h-9 w-9",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

const SunIcon = ({ size, className, ...props }: SunIconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={SunIconVariants({ size, className })}
			fill="#000"
			viewBox="0 0 457.32 457.32"
			stroke="currentColor"
			{...props}
		>
			<g>
				<path d="M228.66 112.692c-63.945 0-115.968 52.022-115.968 115.967s52.023 115.968 115.968 115.968 115.968-52.023 115.968-115.968-52.023-115.967-115.968-115.967"></path>
				<path d="m401.429 228.66 42.467-57.07a15 15 0 0 0-7.562-23.273l-67.901-21.209.811-71.132a15 15 0 0 0-19.797-14.384l-67.399 22.753-41.153-58.023a15 15 0 0 0-24.47 0l-41.154 58.024-67.4-22.753a15 15 0 0 0-19.797 14.384l.812 71.132-67.901 21.209a15 15 0 0 0-7.561 23.273l42.467 57.07-42.467 57.07a15 15 0 0 0 7.561 23.273l67.901 21.208-.812 71.132a15 15 0 0 0 19.797 14.384l67.4-22.753 41.154 58.024a15 15 0 0 0 24.47 0l41.154-58.024 67.399 22.753a15 15 0 0 0 19.797-14.383l-.811-71.133 67.901-21.208a15.003 15.003 0 0 0 7.562-23.273zM228.66 374.627c-80.487 0-145.968-65.481-145.968-145.968S148.173 82.692 228.66 82.692s145.968 65.48 145.968 145.967-65.481 145.968-145.968 145.968"></path>
			</g>
		</svg>
	);
};

export { SunIcon };
