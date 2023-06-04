import { REACT_API_URL } from "@env";

const BASE_URL = REACT_API_URL;

export const getOrders = async () => {
	const response = await fetch(`${BASE_URL}/orders`);
	const result = await response.json();
	return result;
};
