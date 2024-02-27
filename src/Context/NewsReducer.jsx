const NewsReducer = (state, action) => {
    switch (action.type) {

        case "GET_NEWS":
            return {
                ...state,
                allnews: action.payload
            }

        // case "CATCH_NEWS":
        //     return {
        //         ...state,
        //         businessWorld: action.payload
        //     }

        case "WEATHER":
            return {
                ...state,
                weatherinfo: action.payload
            }

        default:
            return state
    }
}

export default NewsReducer