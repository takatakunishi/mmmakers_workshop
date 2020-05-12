import { RESET_CONTENT, SET_URL_CONTENT, POST_CONTENT } from "../../actions/Upload/ActionType";

const initialState = {
  file: {},
  url: [],
  data: []
};


const ContentState = (state = initialState, action) => {
  switch (action.type) {
    case POST_CONTENT:
      return {
        file: action.file,
        url: [...state.url],
        data: [...state.data]
      }
    case SET_URL_CONTENT:
      return {
        file: { ...state.file },
        url: [...action.url],
        data: []
      }
    case RESET_CONTENT:
      return {
        file: {},
        url: [],
        data: []
      }
    default:
      return state;
  }
}

export default ContentState
