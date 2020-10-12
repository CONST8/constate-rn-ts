import api from '../../../services/api';
import {put, call} from 'redux-saga/effects';
import {postUserSuccess, postUserFailure} from './actions';

interface UserTypes {
  name: string;
  email: string;
  password: string;
  user_type: number;
  place_id: string;
  birthDayDate: string;
}

export function* postUser({
  name,
  email,
  password,
  user_type,
  place_id,
  birthDayDate,
}: UserTypes) {
  try {
    const response = yield call(api.post, '/users', {
      name,
      email,
      password,
      user_category: user_type,
      place_id,
      birthday_date: birthDayDate,
    });
    console.log('PostUser');
    yield put(postUserSuccess(response.data));
  } catch ({message, response}) {
    if (!response) {
      console.log(message);
      yield put(postUserFailure(404));
      return;
    }

    console.log(`ERRO NO PostUser [${message}]`);

    const {status} = response;
    yield put(postUserFailure(status));
  }
}
