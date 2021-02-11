import {Types} from './types';
import {action} from 'typesafe-actions';

export const SetTheme = (themeId: number) => {
  return action(Types.SET_THEME, {themeId});
};
