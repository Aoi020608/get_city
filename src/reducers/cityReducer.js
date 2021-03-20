const initialState = {
    city: [], 
}

const cityReducer = (state = {initialState}, action) => {
    switch(action.type) {
        case "FETCH_CITY": 
            return {
                city: action.payload.city
            }

        default:
            return {
                ...state
            }
    }
}

export default cityReducer;
