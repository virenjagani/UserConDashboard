import { Axios } from "../../../Utils/Axios";
import {
  GetAddUserPayload,
  GetUserDeletePayload,
  GetUserEditPayload,
  GetUserObjectPayload,
} from "../../actionProps.types";

export const requestAllUser = () => {
  const response = Axios.get(`/allpost`);
  return response;
};

export const requestUserAdd = (payload: GetAddUserPayload | any) => {
  const response = Axios.post(`/addpost`, payload, {
    headers: {
      Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmQ5MDU5OTFlNzI1MmNkNDBhMTk1NCIsImlhdCI6MTY5ODE2NTc4NSwiZXhwIjoxNjk4MjUyMTg1fQ.j2VjZ80hh1D7VICFQ8npbOofkZE9Oue-o6CZqV6j27Q`,
    },
  });
  return response;
};

export const requestUserDelete = (payload: GetUserDeletePayload) => {
  const response = Axios.delete(`/deletepost/${payload._id}`, {
    headers: {
      Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmQ5MDU5OTFlNzI1MmNkNDBhMTk1NCIsImlhdCI6MTY5ODE2NTc4NSwiZXhwIjoxNjk4MjUyMTg1fQ.j2VjZ80hh1D7VICFQ8npbOofkZE9Oue-o6CZqV6j27Q`,
    },
  });
  return response;
};
export const requestUserObject = (payload: GetUserObjectPayload) => {
  const response = Axios.get(`/getpost/${payload._id}`, {
    headers: {
      Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmQ5MDU5OTFlNzI1MmNkNDBhMTk1NCIsImlhdCI6MTY5ODE2NTc4NSwiZXhwIjoxNjk4MjUyMTg1fQ.j2VjZ80hh1D7VICFQ8npbOofkZE9Oue-o6CZqV6j27Q`,
    },
  });
  return response;
};
export const requestUserEdit = (payload: GetUserEditPayload) => {
  const bodyObj = { title: payload.title };
  const response = Axios.put(`/updatepost/${payload._id}`, bodyObj, {
    headers: {
      Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmQ5MDU5OTFlNzI1MmNkNDBhMTk1NCIsImlhdCI6MTY5ODE2NTc4NSwiZXhwIjoxNjk4MjUyMTg1fQ.j2VjZ80hh1D7VICFQ8npbOofkZE9Oue-o6CZqV6j27Q`,
    },
  });
  return response;
};
export {};
