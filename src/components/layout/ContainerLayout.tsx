const ContainerLayout = ({ children }: { children: React.ReactNode }) => {
	return <div className="w-screen min-h-screen sm:w-[500px] sm:m-auto sm:relative sm:border-tertiary-300 border-2">{children}</div>;
};

export { ContainerLayout };
