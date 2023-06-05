import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICriteria, IOrder } from "./order.types";
import { getCriterias } from "@/shared/api/requests";

export interface IOrderSlice {
	orders: IOrder[];
	criterias: ICriteria[];
	rate: number;
	ratesArr: any[];
}
const initialState: IOrderSlice = {
	orders: [],
	criterias: [],
	rate: 0,
	ratesArr: [
		{ value: 1, checked: false },
		{ value: 2, checked: false },
		{ value: 3, checked: false },
		{ value: 4, checked: false },
		{ value: 5, checked: false },
	],
};

export const setOrderCriterias = createAsyncThunk(
	"order/setCriterias",
	async () => {
		const criterias = await getCriterias();
		return criterias;
	}
);

export const submitOrderRate = createAsyncThunk(
	"order/submitRate",
	async () => {
		// POST orders/rates
	}
);

const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		setOrders: (state, action: PayloadAction<IOrder[]>) => {
			state.orders = [...action.payload];
		},
		rateOrder: (state, action: PayloadAction<number>) => {
			state.rate = action.payload;
			state.ratesArr = state.ratesArr.map(elem => {
				if (elem.value <= action.payload) {
					return { ...elem, checked: true };
				} else {
					return { ...elem, checked: false };
				}
			});
		},
	},
	extraReducers(builder) {
		builder.addCase(
			setOrderCriterias.fulfilled,
			(state, action: PayloadAction<ICriteria[]>) => {
				state.criterias = action.payload.map(el => {
					return { ...el, checked: false };
				});
			}
		);
		builder.addCase(setOrderCriterias.rejected, (state, action) => {
			console.warn("Error");
		});
		builder.addCase(setOrderCriterias.pending, (state, action) => {
			//
		});
	},
});

export const { setOrders, rateOrder } = orderSlice.actions;

export default orderSlice.reducer;
