export { useOneOrder, useOrders } from "./model/order.hooks";

export type { IOrder } from "./model/order.types";

export { default as OrderCard } from "./ui/OrderCard";

export { default as orderSlice } from "./model/order.slice";
export {
	setOrders,
	rateOrder,
	setOrderCriterias,
	submitOrderRate,
} from "./model/order.slice";
export type { IOrderSlice } from "./model/order.slice";
