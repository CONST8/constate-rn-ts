import {Types, TypesTheme} from './types';
import themes from '../../../themes';

const INITIAL_STATE: TypesTheme = {
  theme: themes[0],
};

const reducer = (state = INITIAL_STATE, action: any): any => {
  switch (action.type) {
    case Types.SET_THEME:
      const GetTheme = () =>
        themes.find((theme) => theme.key === action.payload.themeId);
      return {...state, theme: GetTheme()};
    default:
      return state;
  }
};

export default reducer;
