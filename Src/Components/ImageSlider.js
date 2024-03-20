import { View, FlatList, Image, Dimensions } from "react-native";
import React, { useState, useRef } from "react";
import Colors from "../Utils/Colors";

const ImageSlider = ({ productImages }) => {
  const { width } = Dimensions.get("window");
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View className="mt-5 ">
      <FlatList
        data={productImages}
        horizontal
        onScroll={(e) => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrentIndex((x / width).toFixed(0));
        }}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            className="h-[207px]  justify-center items-center"
            style={{ width: width }}
          >
            <Image
              // width={width}
              // height={207}
              source={{ uri: item }}
              resizeMode="cover"
              style={{ borderRadius: 10, width: "90%", height: "100%" }}
            />
          </View>
        )}
        keyExtractor={(item) => item}
      />
      <View className="flex-row absolute bottom-4 left-6">
        {productImages?.map((item, index) => {
          return (
            <View
              key={item}
              style={{
                backgroundColor:
                  currentIndex == index ? Colors.Primary : "#E4E4E4",
              }}
              className="w-5 h-1 bg-black mr-1 rounded-full"
            ></View>
          );
        })}
      </View>
    </View>
  );
};

export default ImageSlider;
