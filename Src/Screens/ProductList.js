import { View, FlatList, LogBox, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import GlobalApis from "../Apis/GlobalApis";
import ProductItem from "../Components/ProductItem";
import { Skeleton } from "@rneui/base";

const ProductList = () => {
  LogBox.ignoreAllLogs();
  const [products, setProducts] = useState([]);
  const SkeletonArray = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const data = await GlobalApis.getProducts();
        setProducts(data.products);
      } catch (error) {
        Alert.alert("Server Timed out", "Please try after some time");
      }
    };

    getAllProducts();
  }, []);

  if (products.length === 0) {
    return (
      <View className="flex-1 p-5">
        {SkeletonArray.map((item) => {
          return (
            <Skeleton
              key={item}
              animation="pulse"
              width={"100%"}
              height={120}
              style={{
                marginBottom: 20,
                borderRadius: 5,
                // backgroundColor: "#F2EFE5",
              }}
            />
          );
        })}
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ProductList;
