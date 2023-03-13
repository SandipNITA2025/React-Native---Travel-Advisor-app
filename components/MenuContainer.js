import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Restaurants } from "../assets";

const MenuContainer = ({ title, imgSrc, type, setType }) => {
    const handlePress = ()=>{
        setType(title.toLowerCase())
    }
  return (
    <TouchableOpacity onPress={handlePress} className=" space-y-2 items-center justify-center">
      <View
        className={` w-16 h-16 p-1 rounded-full items-center justify-center ${
          type === title.toLowerCase() ? " bg-[#559295]" : ""
        }`}
      >
        <Image className=" w-full h-full rounded-full object-contain" source={imgSrc} />
      </View>
      <Text className=" text-[#559295] text-base font-semibold"> {title} </Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
