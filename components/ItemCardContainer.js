import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import DetailsScreen from "./../screens/DetailsScreen";

const ItemCardContainer = ({ imgSrc, title, location, data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailsScreen", { param: data })}
      className=" rounded-md border border-gray-300 space-y-2 shadow-md bg-white w-[170px] p-3 my-2"
    >
      <Image
        source={{ uri: imgSrc }}
        className=" w-full h-40 rounded-md object-cover"
      />
      <Text className=" text-base text-[#438489] font-semibold ">
        {title?.length > 14 ? `${title.slice(0, 14)}...` : title}
      </Text>
      <Text className=" flex-row items-center text-[#438489]">
        <Ionicons
          style={{ color: "#438489" }}
          size={15}
          name="location-sharp"
        />
        {location?.length > 16 ? `${location.slice(0, 16)}...` : location}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
