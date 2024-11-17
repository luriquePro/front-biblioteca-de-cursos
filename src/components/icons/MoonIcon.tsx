import { cva, VariantProps } from "class-variance-authority";
import React from "react";

interface MoonIconProps extends React.SVGAttributes<HTMLOrSVGElement>, VariantProps<typeof MoonIconVariants> {}

const MoonIconVariants = cva("", {
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

const MoonIcon = ({ size, className, ...props }: MoonIconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={MoonIconVariants({ size, className })}
			fill="#fff"
			viewBox="0 0 24 24"
			stroke="currentColor"
			{...props}
		>
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
		</svg>
	);
};

export { MoonIcon };
