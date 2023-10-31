const DiscordLoading = () => {
	return (
		<div>
			<header className="card-body flex items-center justify-center w-full mb-8">
				<h2 className="card-title text-3xl text-center">Entrando</h2>
			</header>
			<div className="flex items-center justify-center flex-col">
				<progress className="progress w-56" />
			</div>
		</div>
	);
};

export default DiscordLoading;
