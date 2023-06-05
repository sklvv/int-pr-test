import { REACT_API_URL } from "@env";

const BASE_URL = REACT_API_URL;

export const getOrders = async () => {
	const response = await fetch(`${BASE_URL}/orders`);
	const result = await response.json();
	return result;
};

export const getOrderInfo = async (id: string) => {
	const response = await fetch(`${BASE_URL}/orders/${id}`);
	const result = await response.json();
	return result;
};

export const getCriterias = async () => {
	const response = await fetch(`${BASE_URL}/criterias`);
	const result = await response.json();
	return result;
};
