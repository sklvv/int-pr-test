import { Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { rateOrder } from "@/entities/order";

const CHECKED_STAR =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1200px-Star_icon_stylized.svg.png";

const STAR = "https://cdn-icons-png.flaticon.com/512/69/69495.png?w=360";

const StarIcon: React.FC<{ value: number; checked: boolean }> = ({
	value,
	checked,
}) => {
	const dispatch = useAppDispatch();

	const handlePress = () => {
		dispatch(rateOrder(value));
	};

	return (
		<Pressable onPress={handlePress}>
			<Image
				source={{
					uri: checked ? CHECKED_STAR : STAR,
				}}
				style={{ width: 40, height: 40 }}
			/>
		</Pressable>
	);
};

export default StarIcon;

const styles = StyleSheet.create({});
