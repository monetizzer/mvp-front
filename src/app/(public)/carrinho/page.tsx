/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { products, store } from "assets/data";
import { ProductTypeBadge } from "components/ProductTypeBadge";
import Link from "next/link";
import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { PiShoppingCartSimpleFill, PiCopySimpleFill } from "react-icons/pi";
import { toast } from "react-toastify";
import { formatMoney } from "utils/money";

const product = products[0];

const pixCode =
	"00020126640014br.gov.bcb.pix0114+55119323332130224testede envio chave fone6016riogrande do sul62070503***6304A1A6";

const ShoppingCart = () => {
	const [foo, setFoo] = useState<boolean>(true);

	const copyPixCode = async () => {
		if (navigator.clipboard) {
			await navigator.clipboard.writeText(pixCode);
		}

		toast.success("Código copiado!", {
			theme: "colored",
		});
	};

	return (
		<main className="min-h-[100dvh] w-full container-padding">
			<h1 className="font-bold text-2xl text-center">Carrinho</h1>

			<section className="mb-4">
				<span className="font-bold text-xl">Conteúdos</span>
				<ul>
					<li className="flex">
						<img
							src={product.previewImagesUrls[0]}
							alt={product.name}
							className="w-36"
						/>
						<div className="w-full flex flex-col justify-between pl-2">
							<span className="font-bold">{product.name}</span>
							<span>
								Por{" "}
								<Link href={`/modelo/${store.username}`} className="link">
									@{store.username}
								</Link>
							</span>
							<div className="flex justify-between">
								<ProductTypeBadge type={product.type} />
								<span>{formatMoney(product.price)}</span>
							</div>
						</div>
					</li>
				</ul>
			</section>

			<section className="flex flex-col mb-4">
				<span className="font-bold text-xl">Total</span>
				<span>{formatMoney(product.price)}</span>
			</section>

			<section>
				{foo && (
					<>
						<ul className="mb-4">
							<li className="flex align-center">
								<AiFillCheckCircle className="mt-1 text-green-500" /> Modelo
								verificada
							</li>
							<li className="flex align-center">
								<AiFillCheckCircle className="mt-1 text-green-500" /> Garantia
								de compra
							</li>
							<li className="flex align-center">
								<AiFillCheckCircle className="mt-1 text-green-500" />{" "}
								<span>
									Acesso <b>imediato</b> após pagamento
								</span>
							</li>
							<li className="flex align-center">
								<AiFillCheckCircle className="mt-1 text-green-500" /> Segurança
								e sigilo
							</li>
						</ul>

						<button
							className="btn btn-secondary w-full"
							onClick={() => setFoo(false)}
						>
							<PiShoppingCartSimpleFill />
							Finalizar compra
						</button>
					</>
				)}

				{!foo && (
					<>
						<span className="font-bold text-xl">Código para pagamento</span>

						<p className="bg-primary rounded rounded-md text-primary-content container-padding break-words my-2">
							{pixCode}
						</p>

						<button className="btn btn-secondary w-full" onClick={copyPixCode}>
							<PiCopySimpleFill />
							Copiar código
						</button>

						<p className="text-xl my-2">
							Para finalizar sua compra, pague esse PIX e depois confira a aba{" "}
							<Link className="link" href="/minhas-compras">
								&#34;Minhas Compras&#34;
							</Link>
							, dentro de alguns minutos o conteúdo será liberado!
						</p>

						<Link
							className=" mt-2 btn btn-success w-full"
							href="/minhas-compras"
						>
							Eu paguei o PIX, acessar conteúdo
						</Link>
					</>
				)}
			</section>
		</main>
	);
};

export default ShoppingCart;
