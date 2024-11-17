import { Header } from "../components/app/Header";
import { Button } from "../components/ui/Button";
import { useNavigationStore } from "../store/navigationStore";

const ErrorPage404 = () => {
	const { lastPage } = useNavigationStore();

	return (
		<section>
			<Header border="b-2-black" />
			<div className="bg-white flex items-stretch min-h-screen mt-20">
				<div className="py-8 px-6 text-center">
					<h1 className="text-8xl font-extrabold text-red-600 lg:text-9xl">404</h1>
					<p className="mt-6 text-2xl font-semibold text-gray-800 lg:text-3xl">Ooops! Página não encontrada.</p>
					<p className="mt-4 text-lg text-gray-600">
						Desculpe, a página que você está procurando não existe ou foi movida. Por que não volta para a página inicial e continua explorando?
					</p>
					<div className="mt-16">
						<Button
							redirectTo="/"
							className="px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all border-0"
						>
							Voltar à Página Inicial
						</Button>
						<br />
						<p className="mt-6">OU</p>
						<br />
						<Button
							redirectTo={lastPage ?? "/"}
							className="px-6 py-3 text-lg font-medium text-white bg-gray-600 rounded-lg hover:bg-gray-700 transition-all border-0"
						>
							Voltar Para Ultima Página
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export { ErrorPage404 };
