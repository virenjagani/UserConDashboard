import {
  CLEARE_MESSAGE,
  FAIL_REQUEST,
  GET_USER_ADD,
  GET_USER_DELETE,
  GET_USER_EDIT,
  GET_USER_OBJECT,
  MAKE_REQUEST,
  SET_USER_ADD,
  SET_USER_ALL,
  SET_USER_DELETE,
  SET_USER_EDIT,
  SET_USER_OBJECT,
} from "./Reducers/UserReducer";

// State:-
export type IUser = {
  _id: string;
  title: string;
  description: string;
  creator: { _id: string; name: string };
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type UserInitialState = {
  loading: boolean;
  error: string | null;
  message: string | null;
  userData: IUser[] | null;
  userObject: IUser | null;
};

// Actions:-
// 1)
export type FailRequestPayload = string;
export type AllUserPayload = IUser[] | null;
export type GetAddUserPayload = {
  payload: { title: string; description: string };
};
export type GetAddUserPayloadx = {
  title: string;
  description: string;
};
export type AddUserPayload = string;

export type MakeRequest = {
  type: typeof MAKE_REQUEST;
};
export type GetUserDeletePayload = {
  _id: string | number;
};
export type SetUserDeletePayload = string;
export type GetUserObjectPayload = { _id: string | number };
export type SetUserObjectPayload = IUser;
export type GetUserEditPayload = {
  _id: string;
  title: string;
};
export type SetUserEditPayload = string;

// 2)
export type FailRequest = {
  type: typeof FAIL_REQUEST;
  payload: FailRequestPayload;
};
export type CleareMessage = {
  type: typeof CLEARE_MESSAGE;
};
export type SetUserAll = {
  type: typeof SET_USER_ALL;
  payload: AllUserPayload;
};
export type SetUserAdd = {
  type: typeof SET_USER_ADD;
  payload: AddUserPayload;
};
export type GetUserAddx = {
  type: typeof GET_USER_ADD;
  payload: GetAddUserPayloadx;
};
export type GetUserDelete = {
  type: typeof GET_USER_DELETE;
  payload: GetUserDeletePayload;
};
export type SetUserDelete = {
  type: typeof SET_USER_DELETE;
  payload: SetUserDeletePayload;
};
export type GetUserObject = {
  type: typeof GET_USER_OBJECT;
  payload: GetUserObjectPayload;
};
export type SetUserObject = {
  type: typeof SET_USER_OBJECT;
  payload: SetUserObjectPayload;
};
export type GetUserEdit = {
  type: typeof GET_USER_EDIT;
  payload: GetUserEditPayload;
};
export type SetUserEdit = {
  type: typeof SET_USER_EDIT;
  payload: SetUserEditPayload;
};

// 3) For ReducerActions
export type UserActions =
  | SetUserAll
  | FailRequest
  | MakeRequest
  | SetUserAdd
  | CleareMessage
  | SetUserDelete
  | SetUserObject
  | SetUserEdit
