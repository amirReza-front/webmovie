import types from "../../types";
export const initial = {
    listPageData:[],
    getMoreBtnData:[],
    poster : {}
};
const homeReducer = (state = initial, action) => {
  switch (action.type) {
    case types.list.SUCCEEDED:
      return {
        ...state,
        listPageData:[...action.payload],
        getMoreBtnData:[...state.getMoreBtnData],
        poster:{...action.payload[0]}
      };
  
        case "LIST_GET_MORE":
           
          return {
            ...state,
            listPageData:[...state.listPageData,...action.payload]
          };
          case "NO_RESULT":
            return{
              ...state,
              listPageData:[],
              poster : {...state.poster}
            }
    default:
      return state;
  }
}; 
export default homeReducer;
