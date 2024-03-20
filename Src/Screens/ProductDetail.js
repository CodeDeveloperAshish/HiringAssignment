import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useEffect, useState } from "react";
import GlobalApis from "../Apis/GlobalApis";
import ImageSlider from "../Components/ImageSlider";
import Colors from "../Utils/Colors";
import ProductRating from "../Components/ProductRating";

const ProductDetail = ({ navigation, route }) => {
  const { productName, productId } = route.params;

  const [productDetail, setProductDetail] = useState({});

  useLayoutEffect(() => {
    navigation.setOptions({
      title: productName ? productName : "",
    });
  }, [navigation]);

  const getProductDetails = async () => {
    try {
      const data = await GlobalApis.getProductDetail(productId);
      setProductDetail(data);
    } catch (error) {
      Alert.alert("Server Timed out", "Please try after some time");
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  if (Object.keys(productDetail).length === 0) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="small" color={Colors.Primary} />
      </View>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-white"
    >
      {/* ProducName and Rating,Reviews */}
      <View className="px-6 mt-4">
        <Text
          className="text-[#1E222B]"
          style={{ fontFamily: "Poppins-Regular", fontSize: 50 }}
        >
          {productDetail.title}
        </Text>
        <View className="flex-row items-center mt-2">
          <ProductRating Rating={productDetail.rating} />
          <Text
            style={{ fontFamily: "Poppins-Regular" }}
            className="text-[14px] text-[#A1A1AB] ml-1"
          >
            {productDetail.stock} Reviews
          </Text>
        </View>
      </View>

      <ImageSlider productImages={productDetail.images} />

      {/* ProducPrice and Discounts */}
      <View className="px-6 flex-row mt-8 items-center">
        <Text
          style={{ fontFamily: "Poppins-SemiBold", color: Colors.Primary }}
          className="text-[16px]"
        >
          ${productDetail.price}
        </Text>
        <View
          className="rounded-full w-[84px] h-[24px] justify-center items-center ml-4"
          style={{ backgroundColor: Colors.Primary }}
        >
          <Text
            style={{ fontFamily: "Poppins-Regular" }}
            className="text-[12px] text-white"
          >
            ${productDetail.discountPercentage} OFF
          </Text>
        </View>
      </View>

      {/* Product Add To Cart and Buy Now Buttons*/}
      <View className="px-6 flex-row mt-8 w-full ">
        <TouchableOpacity
          // onPress={handleAddToCart}
          style={{ borderColor: Colors.Primary }}
          className="w-[143px] h-[56px] border rounded-[20px] justify-center items-center"
        >
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              color: Colors.Primary,
            }}
            className="text-[14px]"
          >
            Add To Cart
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: Colors.Primary }}
          className="w-[169px] h-[56px]  rounded-[20px] justify-center items-center ml-8"
        >
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
            }}
            className="text-[14px] text-white"
          >
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>

      {/* ProducDesciption */}
      <View className="px-6 mt-4">
        <Text
          style={{ fontFamily: "Poppins-Regular" }}
          className="text-[16px] text-[#1E222B] mt-5"
        >
          Details
        </Text>

        <Text
          style={{ fontFamily: "Poppins-Regular", lineHeight: 24 }}
          className="text-[16px] text-[#8891A5] mt-3"
        >
          {productDetail.description}
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
