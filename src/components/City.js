import React, { useEffect, useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCity } from "../actions/cityAction";
//antd
import { Select } from "antd";
import listCity from "../prefectureList.json";

const City = () => {
  const dispatch = useDispatch();
  const [cityName, setCistyName] = useState([]);
  const [cityId, setCityId] = useState([]);
  const [cityLength, setCityLength] = useState(0);
  const { Option } = Select;

  useEffect(() => {
    const temName = [];
    const temId = [];
    for (let i = 0; i < listCity.length; i++) {
      temId.push(listCity[i].id);
      temName.push(listCity[i].name);
    }
    setCityId(temId);
    setCistyName(temName);
  }, []);

  const getCity = () => {
    dispatch(fetchCity());
  };

  const selectName = (value) => {
    for (let i = 0; listCity.length; i++) {
      if (listCity[i].name === value) {
        setCityId(listCity[i].id);
      }
    }
  };

  const { city } = useSelector((state) => state.city);
  console.log(city);

  return (
    <div>
      <h1>Oita-Ken</h1>
      <button onClick={getCity}>Get Oita</button>
      {city && city.map((c) => <p>{c}</p>)}
      <Select showSearch placeholder="Select a city" onChange={selectName}>
        {cityName.map((n) => (
          <Option value={n}>{n}</Option>
        ))}
      </Select>
    </div>
  );
};

export default City;
