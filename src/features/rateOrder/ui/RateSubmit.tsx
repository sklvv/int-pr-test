import { View, Button } from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { rateOrder, submitOrderRate } from "@/entities/order";

const RateSubmit: React.FC<{ navigation: any }> = ({ navigation }) => {
	const { rate } = useAppSelector(state => state.order);

	const dispatch = useAppDispatch();

	const readyToSubmit = rate > 0;

	const handleSubmit = () => {
		dispatch(submitOrderRate());
		dispatch(rateOrder(0));
		navigation.navigate("Orders");
	};

	return (
		<View style={{ display: readyToSubmit ? "flex" : "none", flexGrow: 1 }}>
			<Button title="Отправить" onPress={handleSubmit} />
		</View>
	);
};

export default RateSubmit;
