import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import ProductRating from "./ProductRating";
import { useNavigation } from "@react-navigation/native";
import Colors from "../Utils/Colors";

const ProductItem = ({ product }) => {
  const navigation = useNavigation();

  const handleScreen = () => {
    navigation.navigate("ProductDetail", {
      productId: product.id,
      productName: product.title,
    });
  };

  return (
    <TouchableOpacity
      onPress={handleScreen}
      style={{
        shadowColor: "#171717",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      }}
      className="h-auto py-4 bg-white mt-5 rounded-2xl flex-row items-center px-2 w-[90%] self-center"
    >
      <View className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden">
        <Image
          source={{
            uri: `${product.thumbnail}`,
          }}
          resizeMode="cover"
          className="w-full h-full rounded-t-[16px]"
        />
      </View>
      <View
        style={{ backgroundColor: Colors.Primary }}
        className="absolute right-0 top-0 h-8 w-20  rounded-bl-2xl rounded-tr-2xl justify-center items-center"
      >
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: 16,
            color: "#fff",
          }}
        >
          ${product.price}
        </Text>
      </View>
      <View className="ml-3 w-40">
        <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 16 }}>
          {product.title}
        </Text>
        <Text numberOfLines={2} className="w-40 mt-2 mb-2 text-gray-500">
          {product.description}
        </Text>
        <ProductRating Rating={product.rating} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
