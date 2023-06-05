import { useEffect, useState } from "react";
import { IOrder } from "./order.types";
import { getOrderInfo, getOrders } from "@/shared/api/requests";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { setOrders } from "./order.slice";

export function useOneOrder(id: string): [IOrder, boolean] {
	const [order, setOrder] = useState<IOrder>({
		name: "",
		id: "",
		image: "",
		price: "",
		ratesCount: 1,
	});
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchOrders = async () => {
			setLoading(true);
			const result = await getOrderInfo(id);
			setOrder(result);
			setLoading(false);
		};
		fetchOrders();
	}, []);
	return [order, loading];
}

export function useOrders(): [IOrder[], boolean] {
	const dispatch = useAppDispatch();
	const { orders } = useAppSelector(state => state.order);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchOrders = async () => {
			setLoading(true);

			const result = await getOrders();

			dispatch(setOrders(result));

			setLoading(false);
		};
		fetchOrders();
	}, []);
	return [orders, loading];
}
