import {
    GET_ALBUMS_STARTED, GET_ALBUMS_FAILURE, GET_ALBUMS_SUCCESS, SET_SELECTED_ALBUM
} from "./constants";

const defaultState = {
    "albums": [],
    "albumsLoading": false,
    "albumsLoadingError": false,
    "selectedAlbum": null
};

const albumsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_ALBUMS_STARTED: return {
            ...state,
            albumsLoading: true
        };
        case GET_ALBUMS_SUCCESS: return {
            ...state,
            albumsLoading: false,
            albums: action.payload
        };
        case GET_ALBUMS_FAILURE: return {
            ...state,
            albumsLoading: false,
            albumsLoadingError: action.payload
        };
        case SET_SELECTED_ALBUM: return {
            ...state,
            selectedAlbum: action.payload
        };
        default:
            return state;
    }
};

export default albumsReducer;