import {
    POST_CONTENT, RESET_CONTENT, SET_URL_CONTENT,
    LOADING, LOADED
} from "./ActionType";

export const postContent = (file) => ({
    type: POST_CONTENT,
    file
})

export const setUrlContent = (url) => ({
    type: SET_URL_CONTENT,
    url
})

export const resetContent = () => ({
    type: RESET_CONTENT
})

export const loading = () => ({
    type: LOADING,
})

export const loaded = () => ({
    type: LOADED
})
