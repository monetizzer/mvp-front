"use client";

const DiscordError = () => {
	return (
		<div>
			<header className="card-body flex items-center justify-center w-full mb-8">
				<h2 className="card-title text-3xl text-center">Ocorreu um problema</h2>
			</header>
			<div className="flex items-center justify-center flex-col">
				<button
					type="button"
					title="Voltar"
					className="btn btn-secondary w-full mt-4"
					onClick={() => window.history.go(-2)}
				>
					Voltar
				</button>
			</div>
		</div>
	);
};

export default DiscordError;
