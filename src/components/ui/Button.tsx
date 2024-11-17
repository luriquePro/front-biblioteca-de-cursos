import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { Link } from "react-router-dom";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {
	redirectTo?: string;
}

const ButtonVariants = cva("", {
	variants: {
		variant: {
			primary: "text-primary-default bg-transparent border-2 border-primary-default hover:bg-primary-default hover:text-white",
			"primary-solid": "text-white bg-primary-default border-2 border-primary-default hover:bg-primary-700 hover:border-primary-700",
			"transparent-bord": "text-dark bg-transparent border-2 border-black hover:bg-black hover:text-white",
		},
		text: {
			bold: "font-bold",
		},
		rounded: {
			sm: "rounded-sm",
			md: "rounded-md",
			lg: "rounded-lg",
		},
		size: {
			large: "w-80 h-14",
		},
	},
	defaultVariants: {
		variant: "primary-solid",
		size: "large",
		rounded: "lg",
		text: "bold",
	},
});

const Button = ({ variant, text, rounded, size, className, children, redirectTo, ...props }: ButtonProps) => {
	if (redirectTo) {
		return (
			<Link to={redirectTo}>
				<button type="button" className={ButtonVariants({ variant, text, rounded, size, className })} {...props}>
					{children}
				</button>
			</Link>
		);
	}

	return (
		<button type="button" className={ButtonVariants({ variant, text, rounded, size, className })} {...props}>
			{children}
		</button>
	);
};

export { Button };
