import { useEffect } from "react";
import { Button } from "../components/ui/Button";
import { usePageStore } from "../store/pageStore";

const Home = () => {
	const { setAtualPage } = usePageStore();

	useEffect(() => {
		setAtualPage("Início");
	}, [setAtualPage]);

	return (
		<div className="flex-grow realative">
			<img src="/bibliotecaCursosLogo.png" alt="" className="mt-24 w-full h-96" />
			<div className="absolute bottom-8 w-full">
				<div className="flex flex-col justify-center items-center space-y-4 ">
					<Button variant="primary-solid" redirectTo="/auth/login">
						Entrar
					</Button>

					<Button variant="transparent-bord" redirectTo="/auth/register">
						Cadastrar
					</Button>
				</div>
			</div>
		</div>
	);
};

export { Home };
