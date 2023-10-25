import {
  AddUserPayload,
  AllUserPayload,
  FailRequest,
  FailRequestPayload,
  GetAddUserPayloadx,
  GetUserAddx,
  GetUserDelete,
  GetUserDeletePayload,
  GetUserEdit,
  GetUserEditPayload,
  GetUserObject,
  GetUserObjectPayload,
  MakeRequest,
  SetUserAdd,
  SetUserAll,
  SetUserDelete,
  SetUserDeletePayload,
  SetUserEdit,
  SetUserEditPayload,
  SetUserObject,
  SetUserObjectPayload,
  UserActions,
  UserInitialState,
} from "../actionProps.types";

export const MAKE_REQUEST = "MAKE_REQUEST";
export const FAIL_REQUEST = "FAIL_REQUEST";
export const CLEARE_MESSAGE = "CLEARE_MESSAGE";
export const GET_USER_ALL = "GET_USER_ALL";
export const SET_USER_ALL = "SET_USER_ALL";
export const GET_USER_ADD = "GET_USER_ADD";
export const SET_USER_ADD = "SET_USER_ADD";
export const GET_USER_DELETE = "GET_USER_DELETE";
export const SET_USER_DELETE = "SET_USER_DELETE";
export const GET_USER_OBJECT = "GET_USER_OBJECT";
export const SET_USER_OBJECT = "SET_USER_OBJECT";
export const GET_USER_EDIT = "GET_USER_EDIT";
export const SET_USER_EDIT = "SET_USER_EDIT";

export const makeRequest = (): MakeRequest => {
  return {
    type: MAKE_REQUEST,
  };
};
export const failRequest = (payload: FailRequestPayload): FailRequest => {
  return {
    type: FAIL_REQUEST,
    payload,
  };
};
export const setUserAll = (payload: AllUserPayload): SetUserAll => {
  return {
    type: SET_USER_ALL,
    payload,
  };
};
export const getUserAdd = (payload: GetAddUserPayloadx): GetUserAddx => {
  return {
    type: GET_USER_ADD,
    payload,
  };
};
export const setUserAdd = (payload: AddUserPayload): SetUserAdd => {
  return {
    type: SET_USER_ADD,
    payload,
  };
};
export const getUserDelete = (
  payload: GetUserDeletePayload
): GetUserDelete => ({
  type: GET_USER_DELETE,
  payload,
});

export const setUserDelete = (
  payload: SetUserDeletePayload
): SetUserDelete => ({
  type: SET_USER_DELETE,
  payload,
});

export const getUserObject = (
  payload: GetUserObjectPayload
): GetUserObject => ({
  type: GET_USER_OBJECT,
  payload,
});
export const setUserObject = (
  payload: SetUserObjectPayload
): SetUserObject => ({
  type: SET_USER_OBJECT,
  payload,
});
export const getUserEdit = (payload: GetUserEditPayload): GetUserEdit => ({
  type: GET_USER_EDIT,
  payload,
});
export const setUserEdit = (payload: SetUserEditPayload): SetUserEdit => ({
  type: SET_USER_EDIT,
  payload,
});

const initialState: UserInitialState = {
  loading: false,
  error: null,
  message: null,
  userData: null,
  userObject: null,
};

export const userReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        userObject: null,
        userData: null,
        message: null,
        errer: action.payload,
      };
    case SET_USER_ALL:
      return {
        ...state,
        error: null,
        loading: false,
        userData: action.payload,
      };
    case SET_USER_ADD:
      return {
        ...state,
        loading: false,
        error: null,
        message: action.payload,
      };
    case CLEARE_MESSAGE:
      return {
        ...state,
        message: null,
      };
    case SET_USER_DELETE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        error: null,
      };
    case SET_USER_OBJECT:
      return {
        ...state,
        loading: false,
        error: null,
        userObject: action.payload,
      };
    case SET_USER_EDIT:
      return {
        ...state,
        error: null,
        loading: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export {};
