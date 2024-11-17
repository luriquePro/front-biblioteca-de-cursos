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
			"white-bord": "text-dark bg-white border-2 border-black hover:bg-black hover:text-white",
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
			large: "w-80 h-14 xs:w-96 xs:h-16",
		},
		family: {
			roboto: "font-roboto",
			"open-sans": "font-open-sans",
			"sans-serif": "font-sans",
			serif: "font-serif",
		},
	},
	defaultVariants: {
		variant: "primary-solid",
		size: "large",
		rounded: "lg",
		text: "bold",
		family: "sans-serif",
	},
});

const Button = ({ variant, text, rounded, size, className, children, redirectTo, family, ...props }: ButtonProps) => {
	if (redirectTo) {
		return (
			<Link to={redirectTo}>
				<button type="button" className={ButtonVariants({ variant, text, rounded, size, family, className })} {...props}>
					{children}
				</button>
			</Link>
		);
	}

	return (
		<button type="button" className={ButtonVariants({ variant, text, rounded, size, family, className })} {...props}>
			{children}
		</button>
	);
};

export { Button };
