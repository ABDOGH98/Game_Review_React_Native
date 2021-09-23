import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../pages/About";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const AboutStack = createNativeStackNavigator();

export default function NavigationAbout({ navigation }) {
	return (
		<AboutStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: "#f4511e",
				},
				headerTintColor: "#fff",
				headerTitleStyle: {
					fontWeight: "bold",
				},
				headerTitleAlign: "center",
				headerLeft: () => (
					<Entypo
						onPress={() => navigation.openDrawer()}
						color="white"
						name="menu"
						size={32}
					/>
				),
			}}
		>
			<AboutStack.Screen name="ABOUT" component={About} />
		</AboutStack.Navigator>
	);
}
