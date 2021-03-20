import axios from "axios";
import getCityUrl from "../api";

import listCity from "../prefectureList.json";

export const fetchCity = (city_id) => async (dispatch) => {
  //fetch axios
  const city = await axios.get(getCityUrl(city_id));
  console.log(city);
  const object = city.data.data;
  const cityObject = [];
  for (let i = 0; i < object.length; i++) {
    // console.log(object[i].name);
    cityObject.push(object[i].name);
  }

  dispatch({
    type: "FETCH_CITY",
    payload: {
      city: cityObject,
    },
  });
};

export const getAllCityName = () => (dispatch) => {
  const temName = [];
  const temId = [];
  for (let i = 0; i < listCity.length; i++) {
    temId.push(listCity[i].id);
    temName.push(listCity[i].name);
  }
  dispatch({
    type: "GET_ALL_CITYNAME",
    payload: {
      listCityId: temId,
      listCityName: temName,
    },
  });
};

export const selectCityName = (cityName) => (dispatch) => {
  for (let i = 0; i < listCity.length; i++) {
    if (listCity[i].name === cityName) {
      dispatch({
        type: "SELECT_CITY", 
        payload: {
          selectCityId: listCity[i].id,
        }
      })
    }
  }
};
