import { ButtonIcon } from "@/components/button/iconButton";
import { Input } from "@/components/input";
import { LinkIcon } from "lucide-react-native";
import { ImageBackground, Text, View } from "react-native";
import { styles } from "./styles";

export default function Event() {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("@/assests/background.png")}
				style={styles.imgBackground}
			>
				<View>
					<Text>Inscrição confirmada!</Text>
					<Text>
						Para entrar no evento, acesse o link enviado para seu e-mail.
					</Text>
				</View>
				<View>
					<Text>Indique e Ganhe</Text>
					<Text>
						Convide mais pessoas para o evento e concorra a prêmios exclusivos!
						É só compartilhar o link abaixo e acompanhar as inscrições:
					</Text>
					<Input
						iconName={LinkIcon}
						placeholder="devstage.com/codecraft-summit-2025/1289"
					>
						<ButtonIcon />
					</Input>
				</View>
			</ImageBackground>
		</View>
	);
}
