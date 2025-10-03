import { Ionicons } from "@expo/vector-icons";
import { ImageBackground, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Svg, { Circle, Line } from "react-native-svg";
import { Flight } from "@/components/flight";
import { Info } from "@/components/info";
import { colors } from "@/styles/colors";
import { styles } from "./styles";

export function Home() {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.header}
				source={require("@/assets/cover.png")}
			>
				<Text style={styles.title}>Carão e embarque</Text>
				<Text style={styles.subtitle}>Faltam 45 dias para sua viagem</Text>
			</ImageBackground>

			<View style={styles.ticket}>
				<View style={styles.content}>
					<View style={styles.flight}>
						<Flight label={"são paulo"} value={"GRU"}></Flight>
						<View style={styles.duration}>
							<Ionicons
								name={"airplane-sharp"}
								size={32}
								color={colors.black}
							></Ionicons>
							<Text style={styles.hours}>9h 45 min</Text>
						</View>
						<Flight label={"nova york"} value={"JKR"}></Flight>
					</View>
					<Text style={styles.label}>Passageiro</Text>
					<Text style={styles.name}>Rohdrigo Alberto</Text>

					<View style={styles.details}>
						<View style={styles.inline}>
							<Info label="Data" value="17 de Nov."></Info>
							<Info label="Embarque" value="17:25"></Info>
						</View>
					</View>
				</View>

				<View>
					<Svg height={28} width="100%">
						<Line
							x1="0%"
							y1="50%"
							x2="100%"
							y2="50%"
							stroke={colors.gray[400]}
							strokeDasharray="5,5"
							strokeWidth={1}
						/>
						<Circle r={8} cx="0%" cy="50%" fill={colors.black}/>
                        <Circle r={8} cx="100%" cy="50%" fill={colors.black}/>
					</Svg>
				</View>

				<View style={styles.footer}>
					<View style={styles.footerContent}>
						<View style={styles.inline}>
							<Info label="Voo" value="Y7 607" />
							<Info label="Assento" value="296" />
						</View>
						<View style={styles.inline}>
							<Info label="Terminal" value="3" />
							<Info label="Portão" value="39" />
						</View>
					</View>
					<QRCode value="boarding code" size={130} />
				</View>
			</View>
		</View>
	);
}
