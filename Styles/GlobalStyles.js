import { StyleSheet, StatusBar } from "react-native";

export const globalStyles = StyleSheet.create({
	bar: {
		marginTop: StatusBar.currentHeight,
	},
	titleText: {
		fontFamily: "source-sans-pro",
		fontSize: 20,
		fontWeight: "bold",
	},
	safeView: {
		marginHorizontal: 15,
	},
	input: {
		borderWidth: 1,
		borderColor: "#f4511e",
		padding: 10,
		marginVertical: 5,
		borderRadius: 10,
	},
	fullPage: {
		flex: 1,
	},
});

export const images = {
	ratings: {
		1: require("../Assets/img/rating/rating-1.png"),
		2: require("../Assets/img/rating/rating-2.png"),
		3: require("../Assets/img/rating/rating-3.png"),
		4: require("../Assets/img/rating/rating-4.png"),
		5: require("../Assets/img/rating/rating-5.png"),
	},
};
