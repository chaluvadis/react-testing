import {
    GET_ALLUSERS_STARTED, GET_ALLUSERS_FAILURE, GET_ALLUSERS_SUCCESS,
    GET_USER_BY_ID_STARTED, GET_USER_BY_ID_SUCCESS, GET_USER_BY_ID_FAILURE
} from "./constants";

const defaultState = {
    "users": [],
    "usersLoading": false,
    "userLoadingError": false,
    "selectedUser": null,
    "selectedUserLoading": false,
    "selectedUserLoadingError": false
};

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_ALLUSERS_STARTED: return {
            ...state,
            usersLoading: true
        };
        case GET_ALLUSERS_SUCCESS: return {
            ...state,
            users: action.payload
        };
        case GET_ALLUSERS_FAILURE: return {
            ...state,
            useuserLoadingError: action.payload
        };
        case GET_USER_BY_ID_STARTED: return {
            ...state,
            selectedUserLoading: true
        };
        case GET_USER_BY_ID_SUCCESS: return {
            ...state,
            selectedUser: action.payload
        };
        case GET_USER_BY_ID_FAILURE: return {
            ...state,
            selectedUserLoadingError: action.payload
        };
        default:
            return state;
    }
};

export default userReducer;