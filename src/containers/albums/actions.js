import {
    GET_ALLUSERS_STARTED, GET_ALLUSERS_FAILURE, GET_ALLUSERS_SUCCESS,
    GET_USER_BY_ID_STARTED, GET_USER_BY_ID_SUCCESS, GET_USER_BY_ID_FAILURE
} from "./constants";
export const get_allusers_data = () => {
    return async dispatch => {
        try {
            dispatch(get_allusers_started());
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            dispatch(get_allusers_success(data));
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

export const get_user_by_id = (id) => {
    return dispatch => {
        dispatch(get_user_by_id_started());
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => get_user_by_id_success(data))
            .catch(err => dispatch(get_user_by_id_failed(err)));
    };
};

export const get_user_by_id_started = () => {
    return { type: GET_USER_BY_ID_STARTED };
};

export const get_user_by_id_failed = (error) => {
    return { type: GET_USER_BY_ID_FAILURE, payload: error };
};

export const get_user_by_id_success = (data) => {
    return { type: GET_USER_BY_ID_SUCCESS, payload: data };
};
