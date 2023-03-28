import { combineReducers } from "redux";
import swiperReducer from "./swiperReducer";
import homeReducer from "./homeReducer";
import singlePageReducer from'./singlePageReducer'
import genrs from './genrsreducer'
import listPageReducer from './listPageReducer'
const rootReducer  = combineReducers({
    swiperReducer,
    homeReducer,
    singlePageReducer,
    genrs,
    listPageReducer
})
export default rootReducer