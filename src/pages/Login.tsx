import { useEffect } from "react";
import { usePageStore } from "../store/pageStore";

interface LoginProps {}

const Login = ({}: LoginProps) => {
	const { setAtualPage } = usePageStore();

	useEffect(() => {
		setAtualPage("Entrar");
	}, [setAtualPage]);

	return (
		<section className="w-full mx-0 px-0 bg-gray-200 min-h-96">
			<div className="pt-4 space-y-8">
				{/* Input Login */}
				<div className="w-80 min-h-16 mx-auto">
					<label htmlFor="login" className="font-sans text-sm font-bold">
						Seu Login
					</label>
					<div className="w-full h-[48px] bg-white mt-2 rounded-lg">
						<input
							type="text"
							className="w-full h-full rounded-lg outline-none border-0 pl-4 placeholder:text-black"
							id="login"
							placeholder="Informe seu Login"
						/>
					</div>
				</div>

				{/* Input Senha */}
				<div className="w-80 min-h-16 mx-auto">
					<label htmlFor="login" className="font-sans text-sm font-bold">
						Sua Senha
					</label>
					<div className="w-full h-[48px] bg-white mt-2 rounded-lg">
						<input
							type="password"
							className="w-full h-full rounded-lg outline-none border-0 pl-4 placeholder:text-black"
							id="login"
							placeholder="Informe sua Senha"
						/>
					</div>
				</div>
			</div>
			<a href="#" className="block w-80 mx-auto text-start font-sans text-sm font-bold mt-2 pl-3">
				Esqueci minha Senha
			</a>
		</section>
	);
};

export { Login };
