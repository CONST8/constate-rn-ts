import {combineReducers} from 'redux';
import user from './user/reducer';
import technologies from './technologies';

const reducers = combineReducers({
  user,
  technologies,
});

export default reducers;
