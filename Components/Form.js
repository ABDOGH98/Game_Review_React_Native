import { Formik } from "formik";
import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { globalStyles } from "../Styles/GlobalStyles";
import * as yup from "yup";

const reviewShema = yup.object({
	title: yup.string().required().min(4),
	body: yup.string().required().min(10),
	rating: yup
		.string()
		.required()
		.test(
			"is-num-1-5",
			"Rating must be a number 1-5",
			(val) => parseInt(val) < 6 && parseInt(val) > 0,
		),
});

export default function Form({ addReview }) {
	return (
		<View style={globalStyles.safeView}>
			<Formik
				initialValues={{ title: "", body: "", rating: "" }}
				validationSchema={reviewShema}
				onSubmit={(values) => {
					addReview(values);
				}}
			>
				{(props) => (
					<View>
						<TextInput
							style={globalStyles.input}
							placeholder="Review title ..."
							onChangeText={props.handleChange("title")}
							value={props.values.title}
						/>
						<Text style={styles.textError}>
							{props.touched.title && props.errors.title}
						</Text>
						<TextInput
							multiline
							style={globalStyles.input}
							placeholder="Review body ..."
							onChangeText={props.handleChange("body")}
							value={props.values.body}
						/>
						<Text style={styles.textError}>
							{props.touched.body && props.errors.body}
						</Text>
						<TextInput
							style={globalStyles.input}
							placeholder="Review rating (1-5) ..."
							onChangeText={props.handleChange("rating")}
							value={props.values.rating}
							keyboardType="numeric"
						/>
						<Text style={styles.textError}>
							{props.touched.rating && props.errors.rating}
						</Text>
						<Button
							title="Submit"
							color="#f4511e"
							onPress={props.handleSubmit}
						/>
					</View>
				)}
			</Formik>
		</View>
	);
}

const styles = StyleSheet.create({
	textError: {
		color: "#BD1616",
		fontFamily: "source-sans-pro",
		textAlign: "center",
		marginBottom: 7,
		marginTop: 7,
	},
});
