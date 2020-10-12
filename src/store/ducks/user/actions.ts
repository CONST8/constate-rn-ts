import {Types, TypesUser} from './types';
import {action} from 'typesafe-actions';

export const postUser = ({
  name,
  email,
  password,
  user_type,
  place_id,
  birthDayDate,
}: TypesUser) => {
  return action(Types.POST_USER, {
    name,
    email,
    password,
    user_type,
    place_id,
    birthDayDate,
  });
};

export const postUserFailure = (status: number) => {
  return action(Types.POST_USER_FAILURE, {status});
};

export const postUserSuccess = (user: any) => {
  return action(Types.POST_USER_SUCCESS, {user});
};

export const logoutUser = () => {
  return action(Types.LOGOUT_USER, {});
};
