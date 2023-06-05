import { Text, View } from "react-native";
import React from "react";
import { useAppSelector } from "@/shared/hooks/redux";
import StarIcon from "./StarIcon";
import RateDetails from "./RateDetails";
import RateSubmit from "./RateSubmit";

const RateForm: React.FC<{ navigation: any }> = ({ navigation }) => {
	const ratesArr = useAppSelector(state => state.order.ratesArr);

	return (
		<View style={{ height: "100%" }}>
			<Text
				style={{
					marginBottom: 4,
					fontSize: 24,
				}}
			>
				Оценить:
			</Text>
			<View style={{ display: "flex", flexDirection: "row" }}>
				{ratesArr.map(el => {
					return (
						<StarIcon
							key={el.value}
							value={el.value}
							checked={el.checked}
						/>
					);
				})}
			</View>
			<RateDetails />
			<RateSubmit navigation={navigation} />
		</View>
	);
};

export default RateForm;
