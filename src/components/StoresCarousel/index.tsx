/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { MdVerified } from "react-icons/md";
import { Store } from "types/store";

interface Props {
	title: string;
	stores: Array<Store>;
}

export const StoresCarousel = ({ title, stores }: Props) => {
	return (
		<section className="container-padding">
			<h2 className="text-xl font-bold pb-2">{title}</h2>

			<div className="max-w-full space-x-4 carousel carousel-center">
				{stores.map((s) => (
					<Link
						key={s.storeId}
						className="carousel-item max-w-64 w-64 card "
						href={`/modelo/${s.username}`}
					>
						<div className="relative flex items-center justify-center">
							<img src={s.bannerUrl} className="rounded-t-md" />
							<img
								src={s.avatarUrl}
								className="w-32 min-w-32 max-w-32 h-32 min-h-32 max-h-32 rounded-full shadow-xl absolute"
							/>
						</div>
						<div className="bg-white py-2 rounded-b-md flex gap-1 justify-center">
							<span>@{s.username}</span>
							<MdVerified className="text-blue-500 mt-1" />
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};
