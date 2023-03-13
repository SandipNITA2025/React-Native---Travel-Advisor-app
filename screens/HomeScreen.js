import { View, Text, SafeAreaView, Image, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";
import { TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className=" bg-white flex-1 relative">
      {/* First section */}
      <View className="flex-row gap-2 px-6 mt-5 items-center space-x-2">
        <View className=" w-16 h-16 bg-black items-center justify-center rounded-full">
          <Text className=" text-[#4DABB7] text-2xl font-semibold">Go</Text>
        </View>

        <Text className=" text-[#2A2B4B] text-2xl font-semibold">Travel</Text>
      </View>
      {/* Second section */}
      <View className="px-6 mt-8 space-y-3 flex-col">
        <Text className=" text-[#3c6072] text-4xl">Enjoy the trip with</Text>
        <Text className=" text-[#11C4D0] text-4xl font-semibold">
          {" "}
          Good Moments
        </Text>
        <Text className=" text-gray-700 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quisquam!
        </Text>
      </View>
      {/* circle section */}
      <View className=" absolute top-[35%] left-[45%] w-[400px] h-[400px] rounded-full bg-[#00BECC]"></View>
      <View className=" absolute top-[60%] right-[40%] w-[400px] h-[400px] rounded-full bg-[#E99265]"></View>

      {/* Image section */}
      <View className=" flex-1 items-center justify-center relative mt-20">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className=" w-full h-full object-contain"
        />
        {/* Go Button */}
        <TouchableOpacity
        
        onPress={()=>{ navigation.navigate("Discover")}}

        className=" absolute w-24 h-24 border-r-2 border-l-2 border-t-4 border-[#00BECC] rounded-full bottom-[30%] flex-1 items-center justify-center">
          <Animatable.View
            animation="pulse"
            easing="ease-in-out"
            iterationCount="infinite"
            className=" w-20 h-20 rounded-full bg-[#00BECC] flex items-center justify-center"
          >
            <Text className=" text-white text-3xl font-semibold">GO</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
