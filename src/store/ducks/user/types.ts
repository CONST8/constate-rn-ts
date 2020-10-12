import {ActionType} from 'typesafe-actions';
import * as actions from './actions';

export type ModalAction = ActionType<typeof actions>;

export const Types = {
  POST_USER: '@user/POST_USER',
  LOGOUT_USER: '@user/LOGOUT_USER',
  POST_USER_FAILURE: '@user/POST_USER_FAILURE',
  POST_USER_SUCCESS: '@user/POST_USER_SUCCESS',
};

export interface TypesUser {
  name: string | ((v: any) => void);
  email: string | ((v: any) => void);
  password: string | ((v: any) => void);
  user_type: number;
  place_id: string | ((v: any) => void);
  birthDayDate: string | ((v: any) => void);
}

export interface UserState {
  data: object;
  loading: boolean;
  error: boolean;
}
