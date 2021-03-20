const initialState = {
    listCityId: [], 
    listCityName: [],
    city: [], 
    selectCityId: null, 
}

const cityReducer = (state = {initialState}, action) => {
    switch(action.type) {
        case "FETCH_CITY": 
            return {
                ...state,
                city: action.payload.city
            }

        case "GET_ALL_CITYNAME":
            return {
                ...state,
                listCityId: action.payload.listCityId, 
                listCityName: action.payload.listCityName,
            }

        case "SELECT_CITY": 
            return {
                ...state,
                selectCityId: action.payload.selectCityId,
            }

        default:
            return {
                ...state
            }
    }
}

export default cityReducer;
