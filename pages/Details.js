import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles, images } from "../Styles/GlobalStyles";
import Card from "../Components/Card";

export default function Details({ route }) {
	const { title, body, rating } = route.params;

	return (
		<SafeAreaView style={globalStyles.safeView} edges={["left", "right"]}>
			<Card>
				<Text style={{ ...globalStyles.titleText, ...styles.title }}>
					{title}
				</Text>
				<Text style={styles.body}> {body} </Text>
				<View style={styles.rating}>
					<Text style={styles.body}>Lovely rating </Text>
					<Image source={images.ratings[rating]} />
				</View>
			</Card>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	rating: {
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "center",
		borderTopWidth: 1,
		paddingTop: 8,
		marginTop: 10,
		borderTopColor: "#f4511e",
	},
	title: {
		textAlign: "center",
		borderBottomWidth: 1,
		paddingBottom: 8,
		marginBottom: 10,
		borderBottomColor: "#f4511e",
		color: "#f4511e",
		fontSize: 30,
	},
	body: {
		fontFamily: "source-sans-pro",
		fontSize: 17,
	},
});
