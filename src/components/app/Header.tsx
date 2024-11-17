import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigationStore } from "../../store/navigationStore";
import { usePageStore } from "../../store/pageStore";
import { HomeIcon, SettingsIcon } from "../icons";

interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof HeaderVariants> {}

const HeaderVariants = cva("", {
	variants: {
		variant: {
			default: "bg-white",
			primary: "bg-primary-default",
			secondary: "bg-secondary-default",
			transparent: "bg-transparent",
			tertiary: "bg-tertiary-default",
		},
		styles: {
			default: "w-full h-16 border-dark flex justify-between items-center px-6",
		},
	},
	defaultVariants: {
		variant: "default",
		styles: "default",
	},
});

const Header = ({ variant, className, styles, ...props }: HeaderProps) => {
	const { lastPage, atualPage } = useNavigationStore();
	const { atualPage: page } = usePageStore();

	return (
		<header className={HeaderVariants({ variant, className, styles })} {...props}>
			{atualPage === "/" ? (
				<Link to="/">
					<HomeIcon size="2xl" className="cursor-pointer" />
				</Link>
			) : (
				<Link to={lastPage!}>Voltar</Link>
			)}

			{page && <span className="text-black font-bold text-lg uppercase">{page}</span>}

			<Link to="/settings">
				<SettingsIcon size="2xl" className="cursor-pointer" />
			</Link>
		</header>
	);
};

export { Header };