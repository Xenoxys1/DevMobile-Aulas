import { Text, View } from "react-native";
import { styles } from "./styles";

type InfoProps = {
	label: string;
	value: string;
};

export function Info({ label, value }: InfoProps) {
	return (
		<View>
			<Text style={styles.label}>{label}</Text>
			<Text style={styles.value}>{value}</Text>
		</View>
	);
}
