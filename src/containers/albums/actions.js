import {
    GET_ALBUMS_STARTED, GET_ALBUMS_FAILURE, GET_ALBUMS_SUCCESS, SET_SELECTED_ALBUM
} from "./constants";
export const get_albums_data = (id) => {
    return async dispatch => {
        try {
            dispatch(get_albums_started());
            const res = await fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${id}`);
            const data = await res.json();
            dispatch(get_albums_success(data));
            dispatch(set_selected_album(data[0]));
        } catch (error) {
            dispatch(get_albums_failed(error));
        }
    };
};

export const get_albums_started = () => {
    return { type: GET_ALBUMS_STARTED };
};

export const get_albums_failed = (error) => {
    return { type: GET_ALBUMS_FAILURE, payload: error };
};

export const get_albums_success = (data) => {
    return { type: GET_ALBUMS_SUCCESS, payload: data };
};

export const set_selected_album = (data) => {
    return { type: SET_SELECTED_ALBUM, payload: data };
};