import axios from "axios";
import base_url from "../api";

export const fetchCity = () => async (dispatch) => {
  //fetch axios
  const city = await axios.get(base_url);
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
