import { View, Text, Pressable, Modal, Image } from "react-native";
import { useState } from "react";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import { SwipeGesture } from "react-native-swipe-gesture-handler";
import { BlurView } from "expo-blur";
import { type IProductCard } from "../type";

const ProductCard = ({ $id, title, creator, thumbnail }: IProductCard) => {
	const [modalVisible, setModalVisible] = useState(false);
	const onSwipePerformed = (action: string) => {
		action === "down" ? setModalVisible(false) : null;
	};
	return (
		<View className="flex flex-col items-center px-4 mb-14">
			<Pressable
				onPress={() => setModalVisible(true)}
				className="w-full h-60 rounded-xl mt-3 relative flex justify-center
				items-center">
				<Image
					source={{ uri: thumbnail }}
					className="w-full h-full rounded-xl mb-3"
					resizeMode="cover"
				/>
			</Pressable>
			<View className="flex flex-row gap-3 items-start">
				<View className="flex justify-center items-center flex-row flex-1">
					<View className="flex justify-center flex-1 ml-3 gap-y-1">
						<Text
							className="font-psemibold text-sm text-white"
							numberOfLines={1}>
							{title}
						</Text>
						<Text
							className="text-xs text-gray-100 font-pregular"
							numberOfLines={1}>
							{creator}
						</Text>
					</View>
				</View>
			</View>
			<Modal
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
				animationType="fade"
				transparent={true}>
				<BlurView intensity={80} tint="dark">
					<SwipeGesture onSwipePerformed={onSwipePerformed}>
						<View className="flex shadow-2xl items-center h-full">
							<View className="w-[99%] h-[400px] flex-shrink">
								<ReactNativeZoomableView
									maxZoom={1.5}
									contentWidth={300}
									minZoom={1}
									panEnabled={false}
									contentHeight={500}>
									<Image
										source={{ uri: thumbnail }}
										className="w-full h-[400px] rounded-xl"
										resizeMode="cover"
									/>
								</ReactNativeZoomableView>
							</View>
						</View>
					</SwipeGesture>
				</BlurView>
			</Modal>
		</View>
	);
};

export default ProductCard;
