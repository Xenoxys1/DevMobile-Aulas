import { colors } from "@/styles/colors";
import { Copy } from "lucide-react-native";
import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps;

export function ButtonIcon({ ...rest }: ButtonProps) {
	return (
		<TouchableOpacity {...rest} style={styles.container}>
			<Copy size={24} color={colors.blue[300]} />
		</TouchableOpacity>
	);
}
