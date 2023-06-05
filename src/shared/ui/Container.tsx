import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <ScrollView style={styles.container}>{children}</ScrollView>;
};

export default Container;

const styles = StyleSheet.create({
	container: {
		paddingLeft: 10,
		paddingRight: 10,
		width: "100%",
		marginTop: 10,
		height: "100%",
	},
});
