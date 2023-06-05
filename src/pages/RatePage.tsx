import React from "react";
import { Text, View } from "react-native";
import { RateProps } from "./AppRouter";
import { Container } from "@/shared/ui";
import { useOneOrder } from "@/entities/order";
import { RateForm } from "@/features/rateOrder";

const RatePage: React.FC<RateProps> = ({ route, navigation }) => {
	const { productId } = route.params;
	const [order, loading] = useOneOrder(productId);
	return (
		<Container>
			{loading ? (
				<Text>Загрузка...</Text>
			) : (
				<View style={{ height: "100%" }}>
					<Text
						style={{
							fontWeight: "bold",
							marginBottom: 16,
							fontSize: 36,
						}}
					>
						{order.name}
					</Text>
					<RateForm navigation={navigation} />
				</View>
			)}
		</Container>
	);
};

export default RatePage;
