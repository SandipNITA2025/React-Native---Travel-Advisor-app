import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MenuContainer from "../components/MenuContainer";
import { Attraction, Hotel, Restaurant } from "../assets";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import ItemCardContainer from "./../components/ItemCardContainer";

//api start:
import axios from "axios";

export const getPlacesData = async (type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
      {
        params: {
          bl_latitude: "25.15543993776612",
          tr_latitude: "25.41257834546226",
          bl_longitude: "51.39587210719369",
          tr_longitude: "51.62812119686502",
          limit: "20",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "1ca9d6dc97msha5ea4f512661f61p1e07c5jsn4898426ae91d",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    // return error;
    console.log(error);
  }
};
//api end:

const Discover = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [type, setType] = useState("restaurants");
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type).then((data) => {
      setMainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [type]);

  return (
    <SafeAreaView className=" bg-white flex-1 relative">
      {/* header */}
      <View className="flex-row justify-between px-6 mt-2 items-center space-x-2">
        <View>
          <Text className=" text-[#136A71] text-3xl font-bold">Discover</Text>
          <Text className=" text-[#136A71] text-3xl font-light">
            the Beauty today
          </Text>
        </View>
      </View>

      {/* Search */}
      <View className="flex items-center justify-start bg-white border border-gray-400 mx-6 shadow-md rounded-xl flex-row px-2 mb-4 mt-4">
        <EvilIcons name="search" size={30} className=" text-gray-300" />
        <TextInput
          className=" py-2 w-full text-base outline-none border-white"
          placeholder="Search..."
          onChangeText={(text) => setSearchInput(text)}
        ></TextInput>
      </View>

      {/* menu section */}
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size={"large"} color="#136A71" />
        </View>
      ) : (
        <ScrollView>
          {/* menu buttons */}
          <View className="flex-row justify-around px-6 mt-4 items-center space-x-2">
            <MenuContainer
              key="restaurant"
              title="Restaurants"
              imgSrc={Restaurant}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key="hotel"
              title="Hotels"
              imgSrc={Hotel}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key="attraction"
              title="Attractions"
              imgSrc={Attraction}
              type={type}
              setType={setType}
            />
          </View>
          {/* menus-list */}
          <View className="flex-row px-6 mt-8 items-center space-x-2">
            {/* text */}
            <View className="flex-row items-center justify-between w-full">
              <Text className=" text-2xl font-semibold text-[#438489] ">
                Top Tips
              </Text>
              <TouchableOpacity className=" flex-row items-center gap-2">
                <Text className=" text-[#7ebec3]  text-xl">Explore</Text>
                <AntDesign
                  style={{ color: "#7ebec3" }}
                  name="arrowright"
                  size={22}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* items */}
          <View className=" px-4 mt-8 flex-row items-center justify-evenly flex-wrap mb-10">
            {mainData?.length > 0 ? (
              <>
                {mainData
                  ?.filter((data) =>
                    data.name?.toLowerCase().includes(searchInput.toLowerCase())
                  )
                  .map((data, ind) => (
                    <ItemCardContainer
                    data={data}
                      key={ind}
                      imgSrc={
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                      }
                      title={data.name}
                      location={data.location_string}
                    />
                  ))}
              </>
            ) : (
              <>
                <View>
                  <Text>No data found</Text>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
