import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Text, View } from "react-native";
import { ProductCard } from "../components";
import { type IProductCard } from "../type";

const Home = () => {
	const products: IProductCard[] = [
		{
			$id: "1",
			title: "Sports car driving on asphalt road at night generative AI",
			creator: "james",
			thumbnail:
				"https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?t=st=1713518540~exp=1713522140~hmac=ce07d19ca80947e2b457a2e35bdfc12818c82086f66d1c2d516b58b84d2cfd7a&w=1480",
		},
		{
			$id: "2",
			title:
				"Luxurious car parked on the highway with an illuminated headlight at sunset",
			creator: "mike",
			thumbnail:
				"https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1713449119~exp=1713452719~hmac=6fce3c0b783fffd37b938a1fd32fa69181e846de3ec825bfac5ce14600024066&w=1480",
		},
		{
			$id: "3",
			title: "Detailed shot of car wheels and tires",
			creator: "rorozoa",
			thumbnail:
				"https://img.freepik.com/free-photo/detailed-shot-car-wheels-tires_157027-4311.jpg?t=st=1713518748~exp=1713522348~hmac=a26e360150b0b66ec2b8651dfde3279ef213c8ad4789c2c61b5271f879b17d7e&w=1480",
		},
		{
			$id: "4",
			title: "Sports car driving on asphalt road at night generative AI",
			creator: "james",
			thumbnail:
				"https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?t=st=1713518540~exp=1713522140~hmac=ce07d19ca80947e2b457a2e35bdfc12818c82086f66d1c2d516b58b84d2cfd7a&w=1480",
		},
	];

	return (
		<SafeAreaView className="bg-gray-500">
			<FlatList
				data={products}
				keyExtractor={(item) => item.$id}
				renderItem={({ item }) => (
					<ProductCard
						$id={item.$id}
						title={item.title}
						thumbnail={item.thumbnail}
						creator={item.creator}
					/>
				)}
				ListHeaderComponent={() => (
					<View className="flex my-6 px-4 space-y-6">
						<View className="flex justify-between items-start flex-row mb-6">
							<View>
								<Text className="font-pmedium text-sm text-gray-100">
									Welcome Back
								</Text>
								<Text className="text-2xl font-psemibold text-white">
									MyNebor
								</Text>
							</View>
						</View>
					</View>
				)}
			/>
		</SafeAreaView>
	);
};

export default Home;
