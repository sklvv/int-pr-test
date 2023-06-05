type OrderID = string;
type ImageURL = string;
type OrderPrice = string;

export interface IOrder {
	id: OrderID;
	name: string;
	image: ImageURL;
	price: OrderPrice;
	ratesCount: number;
}

export interface ICriteria {
	id: string;
	text: string;
	checked: boolean;
}
