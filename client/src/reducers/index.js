import { combineReducers } from 'redux';
import manageNews from './manageNews';
import weatherReducer from './weatherReducer';
import manageLogin from './manageLogin';
import manageProfile from './manageProfile';
import manageRecommends from './manageRecommends';


const rootReducer = combineReducers({
  news: manageNews,
  weather: weatherReducer,
  login: manageLogin,
  user: manageProfile,
  recommends: manageRecommends
})


export default rootReducer
