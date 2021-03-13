import {
    GET_ALLUSERS_STARTED, GET_ALLUSERS_FAILURE, GET_ALLUSERS_SUCCESS,
    SET_SELECTED_USER
} from "./constants";
export const get_allusers_data = () => {
    return async dispatch => {
        try {
            dispatch(get_allusers_started());
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            dispatch(get_allusers_success(data));
            dispatch(set_selected_user(data[0]));// first record as selected user
        } catch (error) {
            dispatch(get_allusers_failed(error));
        }
    };
};

export const get_allusers_started = () => {
    return { type: GET_ALLUSERS_STARTED };
};

export const get_allusers_failed = (error) => {
    return { type: GET_ALLUSERS_FAILURE, payload: error };
};

export const get_allusers_success = (data) => {
    return { type: GET_ALLUSERS_SUCCESS, payload: data };
};

export const set_selected_user = (user) => {
    return { type: SET_SELECTED_USER, payload: user };
};
