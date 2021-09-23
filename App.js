import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import NavigationHome from "./routes/HomeStack";
import NavigationAbout from "./routes/AboutStack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator();

export default function App() {
	const [loaded] = useFonts({
		"source-sans-pro": require("./Assets/Fonts/SourceSansPro-Black.ttf"),
	});

	if (!loaded) {
		return null;
	}

	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Drawer.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<Drawer.Screen name="L-Gaming" component={NavigationHome} />
					<Drawer.Screen name="About me" component={NavigationAbout} />
				</Drawer.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}
