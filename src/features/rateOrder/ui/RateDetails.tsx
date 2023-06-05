import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { CheckBox } from "react-native-btr";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { setOrderCriterias } from "@/entities/order";

const RateItem: React.FC<{ title: string; checked: boolean }> = ({
	title,
	checked,
}) => {
	const [itemChecked, setItemChecked] = useState(checked);

	return (
		<View
			style={{
				display: "flex",
				flexDirection: "row",
				gap: 8,
			}}
		>
			<View style={{ width: 20, height: 20 }}>
				<CheckBox
					checked={itemChecked}
					color="red"
					disabled={false}
					onPress={() => setItemChecked(!itemChecked)}
				/>
			</View>
			<Text
				style={{
					marginBottom: 4,
					fontSize: 16,
				}}
			>
				{title}
			</Text>
		</View>
	);
};

const RateDetails = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		const getCriterias = async () => {
			await dispatch(setOrderCriterias());
		};
		getCriterias();
	}, []);

	const criterias = useAppSelector(state => state.order.criterias);
	const rate = useAppSelector(state => state.order.rate);

	const rateTitle = rate >= 4 ? "Что понравилось?" : "Что не понравилось?";

	const generateCriterias = () => {
		if (rate <= 3) {
			// return first three
			return criterias.slice(0, 3);
		} else {
			// return 4th 5th
			return criterias.slice(-2);
		}
	};

	return (
		<View style={{ display: rate > 0 ? "flex" : "none", flexGrow: 1 }}>
			<Text
				style={{
					marginBottom: 8,
					fontSize: 24,
				}}
			>
				{rateTitle}
			</Text>
			<View style={{ width: "100%", gap: 8 }}>
				{generateCriterias().map(el => {
					return (
						<RateItem
							title={el.text}
							key={el.id}
							checked={el.checked}
						/>
					);
				})}
			</View>
		</View>
	);
};

export default RateDetails;
