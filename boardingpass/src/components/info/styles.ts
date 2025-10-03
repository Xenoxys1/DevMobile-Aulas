import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";

export const styles = StyleSheet.create({
    label: {
        color: colors.gray[400],
        fontSize: 10,
        textTransform: 'uppercase',
        fontFamily: fontFamily.regular,
    },
    value: {
        color: colors.black,
        fontSize: 16,
        fontWeight: '500',
        fontFamily: fontFamily.bold,
    }
})