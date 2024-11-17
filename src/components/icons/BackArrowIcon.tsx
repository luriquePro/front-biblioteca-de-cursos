import { cva, VariantProps } from "class-variance-authority";
import React from "react";

export interface BackArrowIconProps extends React.SVGAttributes<HTMLOrSVGElement>, VariantProps<typeof BackArrowIconVariants> {}

const BackArrowIconVariants = cva("", {
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

const BackArrowIcon = ({ size, className, ...props }: BackArrowIconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={BackArrowIconVariants({ size, className })} viewBox="0 0 24 24" {...props}>
			<path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 20-8-8 8-8"></path>
		</svg>
	);
};

export { BackArrowIcon };
