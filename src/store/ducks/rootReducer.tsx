import {combineReducers} from 'redux';
import user from './user/reducer';
import theme from './theme/reducer';
import technologies from './technologies';

const reducers = combineReducers({
  user,
  technologies,
  theme,
});

export default reducers;
