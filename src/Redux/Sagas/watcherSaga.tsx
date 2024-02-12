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
  // Watch for GET_USER_ALL action and call fetchUserAll saga
  yield takeLatest(GET_USER_ALL, fetchUserAll);

  // Watch for GET_USER_ADD action and call fetchUserAdd saga
  yield takeLatest(GET_USER_ADD, fetchUserAdd);

  // Watch for GET_USER_DELETE action and call fetchUserDelete saga
  yield takeLatest(GET_USER_DELETE, fetchUserDelete);

  // Watch for GET_USER_OBJECT action and call fetchUserObject saga
  yield takeLatest(GET_USER_OBJECT, fetchUserObject);

  // Watch for GET_USER_EDIT action and call fetchUserEdit saga
  yield takeLatest(GET_USER_EDIT, fetchUserEdit);
}


const userHandleSaga = [fork(userHandle)];

export default function* watcherSaga() {
  yield all([...userHandleSaga]);
}

export {};
