import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";

export const styles = StyleSheet.create({
	label: {
		color: colors.gray[400],
		fontSize: 12,
		textTransform: "uppercase",
		fontFamily: fontFamily.regular,
	},
	value: {
		color: colors.black,
		fontSize: 42,
		fontFamily: fontFamily.bold,
        textTransform: "uppercase",
        marginTop: -10,
	},
});
