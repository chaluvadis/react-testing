import {
    GET_ALLUSERS_STARTED, GET_ALLUSERS_FAILURE, GET_ALLUSERS_SUCCESS
} from "./constants";

const defaultState = {
    "users": [],
    "usersLoading": false,
    "userLoadingError": false
};

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_ALLUSERS_STARTED: return {
            ...state,
            usersLoading: true
        };
        case GET_ALLUSERS_SUCCESS: return {
            ...state,
            usersLoading: false,
            users: action.payload
        };
        case GET_ALLUSERS_FAILURE: return {
            ...state,
            usersLoading: false,
            useuserLoadingError: action.payload
        };
        default:
            return state;
    }
};

export default userReducer;