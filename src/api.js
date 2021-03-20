const base_url = "https://www.land.mlit.go.jp/webland/api/CitySearch?area=44";

const getCityUrl = (id) => `${base_url}${id}`;

export default base_url;
