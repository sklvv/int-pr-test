import React from "react";
import { Text, View } from "react-native";
import { OrdersProps } from "./AppRouter";
import { OrderCard, useOrders } from "@/entities/order";
import { Container } from "@/shared/ui";

const OrdersPage: React.FC<OrdersProps> = ({ navigation }) => {
	const [orders, loading] = useOrders();
	return (
		<Container>
			<View>
				<Text
					style={{
						fontSize: 24,
						fontWeight: "bold",
						marginBottom: 16,
					}}
				>
					Ваши заказы:
				</Text>

				{loading ? (
					<Text>Загрузка...</Text>
				) : (
					<View
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 10,
						}}
					>
						{orders.map((order, index) => {
							return (
								<OrderCard
									order={order}
									navigation={navigation}
									key={order.id}
								/>
							);
						})}
					</View>
				)}
			</View>
		</Container>
	);
};

export default OrdersPage;
