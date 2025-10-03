import { useEffect, useState } from "react";
import { Alert, FlatList, Image, TouchableOpacity, View } from "react-native";
import { Button } from "../../components/button";
import { Filter } from "../../components/filter";
import { Input } from "../../components/input";
import { itemsStorage } from "../../storage/item-storage";
import { FilterStatus } from "../../types/filter-status";
import { styles } from "./styles";

const FILTER_STATUS = [FilterStatus.PENDING, FilterStatus.DONE];

export function Home() {
	const [filter, setFilter] = useState(FilterStatus.PENDING);
	const [description, setDescription] = useState("");
	const [items, setItems] = useState([]);

	async function handleAdd() {
		if (!description.trim()) {
			return Alert.alert("Adicionar", "Informe a descrição para adicionar.");
		}

		const newItem = {
			id: Math.random().toString().substring(2), // gerar um id aleatorio com 2 numeros e converter
			description,
			status: FilterStatus.PENDING,
		};

		await itemsStorage.add(newItem);
		await itemByStatus();

		Alert.alert("Adicionado", `Adicionado ${description}`);
		setFilter(FilterStatus.PENDING);
		setDescription("");
	}

	async function itemByStatus() {
		try {
			const response = await itemsStorage.getByStatus(filter);
			setItems(response);
		} catch (error) {
			console.log(error);
			Alert.alert("Erro", "Não foi possível filtrar os itens.");
		}
	}

	async function handleRemove(id) {
		try {
			await itemsStorage.remove(id);
			await itemByStatus();
		} catch (error) {
			console.log(error);
			Alert.alert("Remover", "Não foi possível remover o item");
		}
	}

	function handleClear() {
		Alert.alert("Limpar", "Deseja remover todos?", [
			{
				text: "Não",
				style: "cancel",
			},
			{
				text: "Sim",
				onPress: () => onClear(),
			},
		]);
	}

	async function onClear() {
		try {
			await itemsStorage.clear();
			setItems([]);
		} catch (error) {
			console.log(error);
			Alert.alert("Limpar", "Não foi possível limpar todos os itens.");
		}
	}

	async function handleToggleItemStatus() {
		try {
			await itemsStorage.toggleStatus(id);
			await itemsByStatus();
		} catch (error) {
			console.log(error);
			Alert.alert("Erro", "Não foi possível atualizar o status.");
		}
	}

	useEffect(() => {
		itemByStatus();
	}, [filter]);

	return (
		<View style={styles.container}>
			<Image source={require("../../assets/logo.png")} style={styles.logo} />
			<View style={styles.form}>
				<Input
					placeholder="O que você precisa comprar?"
					onChangeText={setDescription}
					value={description}
				/>
				<Button title="Adicionar" onPress={handleAdd} />
			</View>
			<View style={styles.content}>
				<View style={styles.header}>
					{Object.values(FilterStatus).map((status) => (
						<Filter
							key={status}
							status={status}
							isActive={filter === status}
							onPress={() => setFilter(status)}
						/>
					))}

					<TouchableOpacity styles={styles.clearButton} onPress={handleClear}>
						<Text>Limpar</Text>
					</TouchableOpacity>
				</View>
				<FlatList
					data={items}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<Item
							data={item}
							onStatus={() => handleToggleItemStatus(item.id)}
							onRemove={() => handleRemove(item.id)}
						/>
					)}
					showsVerticalScrollIndicator={false}
					ItemSeparatorComponent={() => <View style={styles.separator} />}
					ListEmptyComponent={() => (
						<Text style={styles.empty}>Nenhum item aqui.</Text>
					)}
				></FlatList>
			</View>
		</View>
	);
}
