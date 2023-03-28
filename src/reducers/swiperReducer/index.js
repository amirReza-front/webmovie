import types from "../../types";
export const initial = {
  movieList: {
    IsUpComming: {
      data: [],
    },
    IsTrendWeekly: {
      data: [],
    },
    Crew:{
        data:[]
    },
    PostIDRelative:{
      data:[]
    }


  },
};
const swiperReducer = (state = initial, action) => {
  switch (action.type) {
    case types.movieList.IsUpComming.SUCCEEDED:
      return {
        ...state,
        movieList: {
          IsUpComming: {
            data: [...action?.payload],
          },
          IsTrendWeekly: {
            data: [...state.movieList.IsTrendWeekly.data],
          },
          PostIDRelative:{
            data:[...state.movieList.PostIDRelative.data]
          }
        },
      };
    case types.movieList.IsTrendWeekly.SUCCEEDED:
      return {
        ...state,
        movieList: {
          IsUpComming: {
            data: [...state.movieList.IsUpComming.data],
          },
          IsTrendWeekly: {
            data: [...action?.payload],
          },
          PostIDRelative:{
            data:[...state.movieList.PostIDRelative.data]
          }
        },
      };
  
      case types.movieList.PostIDRelative.SUCCEEDED:
      return {
        ...state,
        movieList: {
          IsUpComming: {
            data: [...state.movieList.IsUpComming.data],
          },
          IsTrendWeekly: {
            data: [...state.movieList.IsTrendWeekly.data],
          },
          PostIDRelative:{
            data:[...action?.payload]
          }
        },
      };
    default:
      return state;
  }
};
export default swiperReducer;
