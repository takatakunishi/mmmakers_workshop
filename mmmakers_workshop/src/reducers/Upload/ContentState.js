import { RESET_CONTENT, SET_URL_CONTENT, POST_CONTENT, LOADING, LOADED } from "../../actions/Upload/ActionType";

const initialState = {
  file: {},
  url: [],
  data: [],
  load: false
};


const ContentState = (state = initialState, action) => {
  switch (action.type) {
    case POST_CONTENT:
      return {
        file: action.file,
        url: [...state.url],
        data: [...state.data],
        load: state.load
      }
    case SET_URL_CONTENT:
      return {
        file: { ...state.file },
        url: [...action.url],
        data: [],
        load: state.load
      }
    case RESET_CONTENT:
      return {
        file: {},
        url: [],
        data: [],
        load: state.load
      }
    case LOADING:
      return {
        file: { ...state.file },
        url: [...state.url],
        data: [...state.data],
        load: true
      }
    case LOADED:
      return {
        file: {},
        url: [],
        data: [],
        load: false
      }
    default:
      return state;
  }
}

export default ContentState
