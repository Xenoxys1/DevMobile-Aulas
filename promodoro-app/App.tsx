import { StyleSheet, Text, View, Alert } from "react-native";
import { Button } from "./components/button";
import { useState, useEffect, useRef } from "react";

export default function App() {
	const INITIAL_TIME = 25 * 60;
	const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
	const [isRunning, setIsRunning] = useState(false);
	const [cycles, setCycles] = useState(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
	};

	useEffect(() => {
		if (isRunning && timeLeft > 0) {
			intervalRef.current = setInterval(() => {
				setTimeLeft((prev) => prev - 1);
			}, 1000);
		} else if (timeLeft === 0) {
			Alert.alert("Ciclo concluído!", "Você completou um Pomodoro 👏");
			setCycles((prev) => prev + 1);
			setIsRunning(false);
			setTimeLeft(INITIAL_TIME);
		}

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [isRunning, timeLeft]);

	const handleStartPause = () => {
		setIsRunning((prev) => !prev);
	};

	const handleReset = () => {
		setIsRunning(false);
		setTimeLeft(INITIAL_TIME);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>SUPER TIMER PROMODOROTRON</Text>
			<Text style={styles.timer}>{formatTime(timeLeft)}</Text>
			<View style={styles.buttons}>
				<Button
					title={isRunning ? "Pause" : "Start"}
					style={styles.start}
					onPress={handleStartPause}
				/>
				<Button title="Reset" style={styles.reset} onPress={handleReset} />
			</View>
			<Text style={styles.cycle}>
				Ciclos mega maneiros concluídos: {cycles}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	timer: {
		fontSize: 48,
		fontWeight: "bold",
		marginBottom: 30,
	},
	buttons: {
		flexDirection: "row",
		gap: 10,
	},
	start: {
		backgroundColor: "#73ff00ff",
	},
	reset: {
		backgroundColor: "#ff0000ff",
	},
	cycle: {
		fontSize: 18,
		marginTop: 20,
	},
});
