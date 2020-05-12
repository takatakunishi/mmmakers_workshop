const initState = {
  eachData: [],
  workDetail: {},
  connection: true
}
export default function WorksState(state = initState, action) {
  switch (action.type) {
    case 'GETALLWORKS_SUCCESS':
      return {
        eachData: action.data.Id,
        workDetail: state.workDetail,
        connection: true
      }
    case 'GETEACHWORK_SUCCESS':
      return {
        workDetail: action.data["Id"][0],
        eachData: [...state.eachData],
        connection: true
      }
    case 'GETEACHWORK_FAILED':
      return {
        workDetail: state.data,
        eachData: [...state.eachData],
        connection: false
      }
    case 'POST_WORK_SUCCESS':
      return {
        workDetail: action.returnedData,
        eachData: [...state.eachData],
        connection: true
      }
    case 'POST_WORK_FAIL':
      return {
        workDetail: state.data,
        eachData: [...state.eachData],
        connection: false
      }
    default:
      return state;
  }
}
