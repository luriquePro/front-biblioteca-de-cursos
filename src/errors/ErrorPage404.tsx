import { Button } from "../components/ui/Button";

const ErrorPage404 = () => {
	return (
		<section className="bg-white flex items-center justify-center min-h-screen">
			<div className="py-12 px-6 text-center">
				<h1 className="text-8xl font-extrabold text-red-600 lg:text-9xl">404</h1>
				<p className="mt-6 text-2xl font-semibold text-gray-800 lg:text-3xl">Ooops! Página não encontrada.</p>
				<p className="mt-4 text-lg text-gray-600">
					Desculpe, a página que você está procurando não existe ou foi movida. Por que não volta para a página inicial e continua explorando?
				</p>
				<div className="mt-8">
					<Button redirectTo="/" className="px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all">
						Voltar à Página Inicial
					</Button>
				</div>
			</div>
		</section>
	);
};

export { ErrorPage404 };
