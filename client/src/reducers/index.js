import { combineReducers } from 'redux';
import manageNews from './manageNews';
import weatherReducer from './weatherReducer';
import manageLogin from './manageLogin';
import manageProfile from './manageProfile';
import manageRecommends from './manageRecommends';
import routeReducer from './routeReducer';



const rootReducer = combineReducers({
  news: manageNews,
  weather: weatherReducer,
  login: manageLogin,
  user: manageProfile,
  recommends: manageRecommends,
  path: routeReducer
})


export default rootReducer
