import { Text, View } from "react-native";
import { styles } from "./styles";

type FlightProps = {
	label: string;
	value: string;
};

export function Flight({label, value}: FlightProps) {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}