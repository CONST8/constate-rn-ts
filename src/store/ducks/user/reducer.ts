import {Types, UserState, ModalAction} from './types';

const INITIAL_STATE: UserState = {
  data: {},
  loading: false,
  error: false,
};

const reducer = (state = INITIAL_STATE, action: ModalAction): UserState => {
  switch (action.type) {
    case Types.POST_USER:
      return {...state, loading: true, error: false};
    case Types.POST_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.user,
      };
    case Types.POST_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.status,
      };
    case Types.LOGOUT_USER:
      return {...state, loading: false, error: false, data: {}};

    default:
      return state;
  }
};

export default reducer;
