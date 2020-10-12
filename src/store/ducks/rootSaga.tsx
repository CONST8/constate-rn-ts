import {all, takeLatest} from 'redux-saga/effects';

import {Types as UserTypes} from './user/types';
import {postUser} from './user/sagas';

export default function* rootSaga() {
  yield all([takeLatest(UserTypes.POST_USER as any, postUser)]);
}
