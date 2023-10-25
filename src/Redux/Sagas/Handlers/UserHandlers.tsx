import { call, put } from "redux-saga/effects";
import {
  failRequest,
  makeRequest,
  setUserAdd,
  setUserAll,
  setUserDelete,
  setUserEdit,
  setUserObject,
} from "../../Reducers/UserReducer";
import {
  requestAllUser,
  requestUserAdd,
  requestUserDelete,
  requestUserEdit,
  requestUserObject,
} from "../Requests/UserRequest";
import { AxiosResponse } from "axios";
import {
  GetUserAddx,
  GetUserDelete,
  GetUserEdit,
  GetUserObject,
} from "../../actionProps.types";
import { IAxiosUserAdd, IAxiosUserAll } from "../../../Utils/AxiosTypes.types";

export function* fetchUserAll() {
  try {
    yield put(makeRequest());
    const response: AxiosResponse<IAxiosUserAll> = yield call(requestAllUser);
    console.log(response);
    if (response.status === 201) {
      yield put(setUserAll(response.data.details));
    } else {
      yield put(failRequest("Page not found: 404"));
    }
  } catch (error: any) {
    console.log("CATCHED ERROR FOR FETCH_USER_ALL", error);
  }
}

// export function* fetchUserAdd({payload}: any){
export function* fetchUserAdd(action: GetUserAddx) {
  const { payload } = action;
  try {
    yield put(makeRequest());
    // const response: AxiosResponse<IAxiosUserAdd> = yield call(requestUserAdd,payload)
    const response: AxiosResponse<IAxiosUserAdd> = yield call(
      requestUserAdd,
      payload
    );
    if (response.status === 201) {
      yield put(setUserAdd(response.data.message));
    } else {
      yield put(failRequest(response.data.message));
    }
  } catch (error) {
    console.log("CATCHED ERROR FOR FETCH_USER_ADD", error);
  }
}

export function* fetchUserDelete(action: GetUserDelete) {
  const { payload } = action;
  try {
    yield put(makeRequest());
    const response: AxiosResponse = yield call(requestUserDelete, payload);
    console.log(response);
    if (response.status === 201) {
      yield put(setUserDelete(response.data.message));
    } else {
      yield put(failRequest(response.data.message));
    }
  } catch (error) {
    console.log("CATECHED ERROR FOR FETCH_USER_DELETE", error);
  }
}
export function* fetchUserObject(action: GetUserObject) {
  const { payload } = action;
  try {
    yield put(makeRequest());
    const response: AxiosResponse = yield call(requestUserObject, payload);
    console.log(response);
    if (response.status === 200) {
      yield put(setUserObject(response.data.details));
    } else {
      yield put(failRequest(response.data.message));
    }
  } catch (error) {
    console.log("CATECHED ERROR FOR FETCH_USER_OBJECT", error);
  }
}
export function* fetchUserEdit(action: GetUserEdit) {
  const { payload } = action;
  try {
    yield put(makeRequest());
    const response: AxiosResponse = yield call(requestUserEdit, payload);
    console.log(response);
    if (response.status === 201) {
      yield put(setUserEdit(response.data.message));
    } else {
      yield put(failRequest(response.data.message));
    }
  } catch (error) {
    console.log("CATECHED ERROR FOR FETCH_USER_EDIT", error);
  }
}

export {};
