const initState = {
  eachData: []
}
export default function WorksState(state = initState, action) {
  switch (action.type) {
    case 'GETALLWORKS_SUCCESS':
      return {
        eachData: action.data.Id
      }
    default:
      return state;
  }
}
