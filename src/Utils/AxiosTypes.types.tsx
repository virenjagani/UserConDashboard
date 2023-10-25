import { IUser } from "../Redux/actionProps.types";

export type IAxiosUserAll = {
  status: string;
  details: IUser[];
};

export type IAxiosUserAdd = {
  message: string;
  details: {} | object;
};
