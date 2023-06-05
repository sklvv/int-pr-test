import { NavigationContainer } from "@react-navigation/native";
import {
	NativeStackScreenProps,
	createNativeStackNavigator,
} from "@react-navigation/native-stack";
import OrdersPage from "./OrdersPage";
import RatePage from "./RatePage";

export type RootStackParamList = {
	// Home: undefined; // no params
	// Profile: { userId: string }; // params
	// Feed: { sort: "latest" | "top" } | undefined; // optional params
	Orders: undefined;
	Rate: { productId: string };
};
// types for screens
export type OrdersProps = NativeStackScreenProps<RootStackParamList, "Orders">;
export type RateProps = NativeStackScreenProps<RootStackParamList, "Rate">;

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRouter = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Orders"
					component={OrdersPage}
					options={{ title: "Н.Аудио" }}
				/>
				<Stack.Screen
					name="Rate"
					component={RatePage}
					options={{ title: "Оценка заказа" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppRouter;
