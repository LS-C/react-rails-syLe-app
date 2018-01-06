import { combineReducers } from 'redux';
import manageNews from './manageNews';
import weatherReducer from './weatherReducer';
import manageLogin from './manageLogin';
import manageProfile from './manageProfile';

const rootReducer = combineReducers({
  news: manageNews,
  weather: weatherReducer,
  login: manageLogin,
  user: manageProfile
})


export default rootReducer
