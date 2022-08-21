import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "X-RapidAPI-Key": "3773588159msh9a82fa6caf6bb6ep12313cjsnc9abea4daaa7",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

export const getPlacesData = async () => {
  try {
    //request
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (err) {
    console.log(err);
  }
};
