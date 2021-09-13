import React, { useEffect } from "react";
import CardCity from "./CardCity";
//redux
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import {
  fetchCity,
  getAllCityName,
  selectCityName,
} from "../actions/cityAction";
//antd
import { Button, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";

const City = () => {
  const dispatch = useDispatch();
  const { Option } = Select;

  // useEffect(() => dispatch(getAllCityName()), []);

  const getOitaPrefecture = () => {
    dispatch(fetchCity(44));
  };

  const selectName = (city_name: string) => {
    dispatch(selectCityName(city_name));
  };

  const getCityName = () => {
    if (selectCityId === undefined) {
      alert("Please select city!");
    } else {
      dispatch(fetchCity(selectCityId));
    }
  };

  const { listCityName, city, selectCityId } = useSelector(
    (state: RootStateOrAny) => state.city
  );

  return (
    <CityStyled>
      <h1>Search City!</h1>
      <SearchBarStyled>
        <Button
          type="primary"
          icon={<SearchOutlined />}
          onClick={getOitaPrefecture}
        >
          大分県
        </Button>
        <Select
          showSearch
          placeholder="都道府県を選択してください"
          style={{ width: "15rem" }}
          onChange={selectName}
        >
          {listCityName &&
            listCityName.map((n: string) => <Option value={n}>{n}</Option>)}
        </Select>
        <Button type="primary" icon={<SearchOutlined />} onClick={getCityName}>
          検索
        </Button>
      </SearchBarStyled>

      {city && city.map((c: string) => <CardCity cityName={c} />)}
    </CityStyled>
  );
};

const CityStyled = styled.div`
  text-align: center;

  h1 {
    text-font: bold;
  }
`;

const SearchBarStyled = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-around;
`;

export default City;
