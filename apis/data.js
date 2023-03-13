import axios from "axios";

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
      {
        params: {
          bl_longitude: "25.15543993776612",
          tr_longitude: "25.41257834546226",
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
    return null;
  }
};

