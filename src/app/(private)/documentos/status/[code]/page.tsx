import Link from "next/link";

interface IStatus {
	[status: string]: {
		title: string;
		back?: boolean;
		links?: [
			{
				title: string;
				url: string;
			},
		];
	};
}

interface Props {
	params: {
		code: "success" | "error";
	};
}

const status: IStatus = {
	success: {
		title: "Documentos enviados com sucesso.",
		links: [
			{
				title: "Home",
				url: "/",
			},
		],
	},
	error: {
		title: "Documentos não enviados com sucesso.",
		links: [
			{
				title: "Tente novamente",
				url: "/documentos/stage/1",
			},
		],
	},
	sent: {
		title: "Documentos já enviados.",
		links: [
			{
				title: "Home",
				url: "/",
			},
		],
	},
};

const Status: FC<Props> = ({ params }) => {
	const data = status[params.code];

	return (
		<main className="flex justify-center w-full min-h-[100dvh]">
			<section className="flex items-center justify-center w-full max-w-7xl container-padding">
				<div className="card w-full max-w-md flex-shrink-0 xs:bg-base-200 xs:shadow-md container-padding">
					<div>
						<header className="card-body flex items-center justify-center w-full mb-8">
							<h2 className="card-title text-3xl text-center">{data.title}</h2>
						</header>
						<div className="flex items-center justify-center flex-col">
							{data.links?.map((link) => (
								<Link
									key={link.title}
									href={link.url}
									className="btn btn-secondary w-full mt-4"
								>
									{link.title}
								</Link>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export const generateStaticParams = () => {
	return [{ code: "success" }, { code: "error" }, { code: "sent" }];
};

export default Status;
