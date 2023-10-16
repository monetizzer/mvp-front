const formatter = new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL",
});

export const formatMoney = (price: number) => formatter.format(price / 100);
