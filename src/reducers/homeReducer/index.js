import types from "../../types";
export const initial = {
    homeItem:[],
    morBtynData:[]
};
const homeReducer = (state = initial, action) => {
  switch (action.type) {
    case types.homeinfo.SUCCEEDED:
      return {
        ...state,
        homeItem:[...action.payload]
      };
      case "Grid_SUCCEEDED":
        return {
          ...state,
          homeItem:[...action.payload]
        };
        case types.homeinfo.GETMORE:
          return {
            ...state,
            homeItem:[...state.homeItem,...action.payload]
          };
    default:
      return state;
  }
}; 
export default homeReducer;
