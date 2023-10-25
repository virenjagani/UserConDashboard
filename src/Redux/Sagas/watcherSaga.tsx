import { takeLatest, all, fork } from "redux-saga/effects";
import {
  GET_USER_ADD,
  GET_USER_ALL,
  GET_USER_DELETE,
  GET_USER_EDIT,
  GET_USER_OBJECT,
} from "../Reducers/UserReducer";
import {
  fetchUserAdd,
  fetchUserAll,
  fetchUserDelete,
  fetchUserEdit,
  fetchUserObject,
} from "./Handlers/UserHandlers";

function* userHandle() {
  yield takeLatest(GET_USER_ALL, fetchUserAll);
  yield takeLatest(GET_USER_ADD, fetchUserAdd);
  yield takeLatest(GET_USER_DELETE, fetchUserDelete);
  yield takeLatest(GET_USER_OBJECT, fetchUserObject);
  yield takeLatest(GET_USER_EDIT, fetchUserEdit);
}

const userHandleSaga = [fork(userHandle)];

export default function* watcherSaga() {
  yield all([...userHandleSaga]);
}

export {};
