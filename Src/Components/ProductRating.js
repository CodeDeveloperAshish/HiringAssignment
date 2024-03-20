import { View, Text } from "react-native";
import React from "react";
import StarRating from "react-native-star-rating";

const ProductRating = ({ Rating }) => {
  return (
    <StarRating
      starSize={17}
      disabled={true}
      maxStars={5}
      rating={Rating}
      fullStarColor={"gold"}
      emptyStarColor="#1E222B"
      starStyle={{ marginRight: 5 }}
      containerStyle={{ width: 110 }}
    />
  );
};

export default ProductRating;
