import { cva, VariantProps } from "class-variance-authority";
import React from "react";

interface SettingsIconProps extends React.SVGAttributes<HTMLOrSVGElement>, VariantProps<typeof SettingsIconVariants> {}

const SettingsIconVariants = cva("", {
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

const SettingsIcon = ({ size, className, ...props }: SettingsIconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={SettingsIconVariants({ size, className })} viewBox="0 0 32 32" {...props}>
			<path d="M17.599 3.738v2.598l.8.207a9.6 9.6 0 0 1 2.566 1.081l.715.434 1.86-1.86 2.262 2.262-1.888 1.888.407.708a9.5 9.5 0 0 1 1.002 2.527l.196.817h2.744v3.199h-2.806l-.216.782a9.5 9.5 0 0 1-1.04 2.406l-.434.716 2.036 2.035-2.262 2.262-2.064-2.064-.707.407a9.5 9.5 0 0 1-2.368.961l-.8.206v2.951h-3.199V25.31l-.8-.206a9.5 9.5 0 0 1-2.368-.961l-.708-.407L8.463 25.8l-2.262-2.262 2.036-2.035-.434-.716a9.5 9.5 0 0 1-1.04-2.406l-.216-.782H3.741V14.4h2.744l.196-.817a9.5 9.5 0 0 1 1.002-2.527l.407-.708L6.202 8.46l2.262-2.262 1.86 1.86.715-.434a9.5 9.5 0 0 1 2.566-1.081l.8-.207V3.738h3.199zM16 20.799c2.646 0 4.798-2.153 4.798-4.799S18.646 11.201 16 11.201 11.202 13.354 11.202 16A4.804 4.804 0 0 0 16 20.799m2.666-18.127h-5.331v2.839c-1.018.263-1.975.67-2.852 1.202L8.461 4.691l-3.769 3.77 2.065 2.065a10.6 10.6 0 0 0-1.114 2.809h-2.97v5.331h3.06c.263.953.655 1.85 1.156 2.676L4.691 23.54l3.769 3.77 2.241-2.241c.816.469 1.7.828 2.633 1.069v3.191h5.331v-3.191c.933-.241 1.817-.6 2.633-1.069l2.241 2.241 3.769-3.77-2.198-2.198c.501-.826.893-1.723 1.156-2.676h3.06v-5.331h-2.97a10.6 10.6 0 0 0-1.114-2.809l2.065-2.065-3.769-3.77-2.022 2.022a10.6 10.6 0 0 0-2.852-1.202V2.672zM16 19.733c-2.062 0-3.732-1.671-3.732-3.733s1.67-3.732 3.732-3.732 3.732 1.671 3.732 3.732A3.73 3.73 0 0 1 16 19.733"></path>
		</svg>
	);
};

export { SettingsIcon };