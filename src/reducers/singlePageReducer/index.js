import types from "../../types";
export const initial = {
    singlePageData:{}
};
const singlePageReducer = (state = initial, action) => {
  switch (action.type) {
    case types.singlePage.SUCCEEDED:
      return {
        ...state,
        singlePageData:{...action.payload}
      };
   
    default:
      return state;
  }
};
export default singlePageReducer;
