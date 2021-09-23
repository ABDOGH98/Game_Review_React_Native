import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import React from "react";
import Details from "../pages/Details";

import { Entypo, FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const HomeStack = createNativeStackNavigator();

export default function NavigationHome({ navigation }) {
	return (
		<HomeStack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerStyle: {
					backgroundColor: "#f4511e",
				},
				headerTintColor: "#fff",
				headerTitleStyle: {
					fontWeight: "bold",
				},
				title: "TO-DO",
				animation: "slide_from_left",
				headerTitleAlign: "center",
				headerTitle: () => (
					<View style={styles.headerHome}>
						<FontAwesome
							name="gamepad"
							size={24}
							color="white"
							style={styles.headerIcon}
						/>
						<Text style={styles.headerTitle}>L-Gaming</Text>
					</View>
				),
			}}
		>
			<HomeStack.Screen
				name="Home"
				component={Home}
				options={{
					headerLeft: () => (
						<Entypo
							onPress={() => navigation.openDrawer()}
							color="white"
							name="menu"
							size={32}
						/>
					),
				}}
			/>
			<HomeStack.Screen name="Details" component={Details} />
		</HomeStack.Navigator>
	);
}

const styles = StyleSheet.create({
	headerTitle: {
		fontFamily: "source-sans-pro",
		fontSize: 20,
		color: "white",
	},
	headerHome: {
		flexDirection: "row",
	},
	headerIcon: {
		marginRight: 5,
	},
});
