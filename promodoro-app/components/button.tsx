import {
	StyleSheet,
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
	title: string;
};

export function Button({ title, ...rest }: ButtonProps) {
	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {},
	title: {},
});
