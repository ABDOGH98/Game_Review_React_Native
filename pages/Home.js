import React, { useState } from "react";
import {
	Text,
	FlatList,
	TouchableOpacity,
	Modal,
	StyleSheet,
	View,
	Keyboard,
	TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../Styles/GlobalStyles";
import Card from "../Components/Card";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Form from "../Components/Form";

export default function Home({ navigation }) {
	const [reviews, setReviews] = useState([
		{
			title: "Fortnite",
			rating: 5,
			body: "Fortnite est un jeu en ligne développé par Epic Games sous la forme de différents modes de jeu qui partagent le même gameplay général et le même moteur de jeu",
			key: "1",
		},
		{
			title: "GTA",
			rating: 4,
			body: "Grand Theft Auto, souvent abrégé GTA, est une série de jeux vidéo créée par David Jones et Mike Dailly, puis par les frères Dan et Sam Houser, Leslie Benzies et Aaron Garbut. Apparue en 1997, la série est principalement développée par l'entreprise écossaise Rockstar North, et éditée par Rockstar Games.",
			key: "2",
		},
		{
			title: "FIFA",
			rating: 3,
			body: "FIFA Football est le nom générique d’une série de jeux vidéo de football de type arcade et depuis l'introduction du mode Football Ultimate Team en 2008 inclue des caractéristiques du gacha, édité à l’origine par Electronic Arts en 1993 et développé par la suite sous la forme d’une franchise.",
			key: "3",
		},
		{
			title: "Leage Of legend",
			rating: 5,
			body: "League of Legends est un jeu vidéo sorti en 2009 de type arène de bataille en ligne, free-to-play, développé et édité par Riot Games sur Windows et Mac OS.",
			key: "4",
		},
	]);
	const [modalOpen, setModalOpen] = useState(false);

	const addReview = (review) => {
		review.key = reviews.length + 1 + "";
		setReviews((prevReview) => [review, ...prevReview]);
		setModalOpen(false);
	};

	return (
		<SafeAreaView
			edges={["left"]}
			style={{ ...globalStyles.safeView, ...globalStyles.fullPage }}
		>
			<Modal visible={modalOpen} animationType="slide">
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={globalStyles.fullPage}>
						<View style={styles.modalHeader}>
							<Text style={{ ...styles.modalTitle, ...globalStyles.safeView }}>
								ADD YOUR GAME NOW
							</Text>
							<View style={{ ...styles.btn, ...styles.closeBtn }}>
								<AntDesign
									name="close"
									size={24}
									color="black"
									onPress={() => setModalOpen(false)}
								/>
							</View>
						</View>
						<Form addReview={addReview} />
					</View>
				</TouchableWithoutFeedback>
			</Modal>
			<View style={styles.btn}>
				<Ionicons
					name="add-outline"
					size={30}
					color="white"
					onPress={() => setModalOpen(true)}
					style={styles.addBtn}
				/>
			</View>

			<FlatList
				data={reviews}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate("Details", item)}
					>
						<Card>
							<Text style={globalStyles.titleText}>{item.title}</Text>
						</Card>
					</TouchableOpacity>
				)}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	btn: {
		flexDirection: "row",
		justifyContent: "center",
	},
	addBtn: {
		marginVertical: 15,
		backgroundColor: "#f4511e",
		borderRadius: 100,
	},
	closeBtn: {
		marginVertical: 15,
		alignSelf: "flex-end",
		marginRight: 15,
	},
	modalTitle: {
		fontSize: 20,
		fontFamily: "source-sans-pro",
		color: "#f4511e",
	},
	modalHeader: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});
