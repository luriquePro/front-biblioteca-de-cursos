import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigationStore } from "../../store/navigationStore";
import { usePageStore } from "../../store/pageStore";
import { HomeIcon, SettingsIcon } from "../icons";
import { BackArrowIcon } from "../icons/BackArrowIcon";

interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof HeaderVariants> {}

const HeaderVariants = cva("", {
	variants: {
		variant: {
			default: "bg-white",
			primary: "bg-primary-default",
			secondary: "bg-secondary-default",
			transparent: "bg-transparent",
			tertiary: "bg-tertiary-light",
		},
		styles: {
			default: "w-full h-16 border-dark flex justify-between items-center px-6",
		},
		border: {
			default: "",
			"2-black": "border-black border-2",
			"b-2-black": "border-black border-b-2",
		},
	},
	defaultVariants: {
		variant: "default",
		styles: "default",
		border: "default",
	},
});

const Header = ({ variant, className, styles, border, ...props }: HeaderProps) => {
	const { lastPage, atualPage } = useNavigationStore();
	const { atualPage: page } = usePageStore();

	return (
		<header className={HeaderVariants({ variant, border, className, styles })} {...props}>
			{atualPage === "/" ? (
				<Link to="/">
					<HomeIcon size="2xl" className="cursor-pointer" />
				</Link>
			) : (
				<Link to={lastPage!}>
					<BackArrowIcon size="2xl" fill="transparent" />
				</Link>
			)}

			{page && <span className="text-black font-bold text-lg uppercase">{page}</span>}

			<Link to="/settings">
				<SettingsIcon size="2xl" className="cursor-pointer" fill="#000" stroke="#000" />
			</Link>
		</header>
	);
};

export { Header };
