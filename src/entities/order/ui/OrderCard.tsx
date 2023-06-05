import { Button, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IOrder } from "../model/order.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/pages/AppRouter";

interface Props {
	order: IOrder;
	navigation: NativeStackNavigationProp<
		RootStackParamList,
		"Orders",
		undefined
	>;
}

const OrderCard: React.FC<Props> = ({ order, navigation }) => {
	return (
		<View style={styles.orderCard}>
			<View style={styles.imageBox}>
				<Image source={{ uri: order.image }} style={styles.image} />
			</View>
			<View style={styles.info}>
				<Text style={styles.name}>{order.name}</Text>
				<Text style={styles.price}>
					{Math.floor(Number(order.price))} ₽
				</Text>
				<Text style={styles.rates}>Reviews: {order.ratesCount}</Text>
				<Button
					title="Оценить"
					onPress={() =>
						navigation.navigate("Rate", { productId: order.id })
					}
				/>
			</View>
		</View>
	);
};

export default OrderCard;

const styles = StyleSheet.create({
	orderCard: {
		display: "flex",
		flexDirection: "row",
		padding: 10,
		borderRadius: 10,
		borderColor: "lightgray",
		borderWidth: 1,
	},
	imageBox: {
		marginRight: 8,
	},
	image: {
		width: 100,
		height: 100,
		aspectRatio: 1,
	},
	info: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	name: {
		fontWeight: "bold",
	},
	price: {
		fontWeight: "bold",
	},
	rates: {},
});
