import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../Styles/GlobalStyles";

export default function About() {
	return (
		<SafeAreaView style={globalStyles.safeView} edges={["left", "right"]}>
			<Text style={styles.textAbout}>
				My name is <Text style={styles.colorText}>Abdessamad</Text>, I am a
				software engineering
			</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	textAbout: {
		fontSize: 16,
		fontFamily: "source-sans-pro",
	},
	colorText: {
		color: "#f4511e",
		fontWeight: "bold",
	},
});
