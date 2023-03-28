import types from "../../types";
export const initial = {
    Genrs:[]
};
const genrs = (state = initial, action) => {
  switch (action.type) {
    case types.Geners.SUCCEEDED:
      return {
        ...state,
        Genrs:[...action.payload]
      };

    default:
      return state;
  }
}; 
export default genrs;
