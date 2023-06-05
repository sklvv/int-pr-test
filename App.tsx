import { StatusBar } from "expo-status-bar";
import AppRouter from "./src/pages/AppRouter";
import { Provider } from "react-redux";
import { store } from "@/app/store";

export default function App() {
	return (
		<>
			<StatusBar />
			<Provider store={store}>
				<AppRouter />
			</Provider>
		</>
	);
}
