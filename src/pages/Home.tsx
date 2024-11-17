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
			<img src="/bibliotecaCursosLogo.png" alt="" className="mt-24 mx-auto w-80 h-80 xs:w-96 xs:h-96 bg-tertiary-light rounded-full" />
			<div className="absolute bottom-0 w-full py-14">
				<div className="flex flex-col justify-center items-center space-y-8 ">
					<Button variant="primary-solid" redirectTo="/auth/login">
						Entrar
					</Button>

					<Button variant="white-bord" redirectTo="/auth/register">
						Cadastrar
					</Button>
				</div>
			</div>
		</div>
	);
};

export { Home };
