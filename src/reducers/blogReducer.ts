interface Action {
  type: string;
  payload: {
    id: number[];
    title: string[];
    body: string[];
    date: number[];
  };
}

const initialState = {
  id: null,
  title: "",
  body: "",
  date: "",
};

const blogReducer = (state = { initialState }, action: Action) => {
  switch (action.type) {
    case "PUSH_BLOG_DETAIL":
      return {
        ...state,
        title: action.payload.title,
        body: action.payload.body,
        date: action.payload.date,
      };

    // case "GET_ALL_CITYNAME":
    //   return {
    //     ...state,
    //     listCityId: action.payload.listCityId,
    //     listCityName: action.payload.listCityName,
    //   };

    // case "SELECT_CITY":
    //   return {
    //     ...state,
    //     selectCityId: action.payload.selectCityId,
    //   };

    default:
      return {
        ...state,
      };
  }
};

export default blogReducer;
