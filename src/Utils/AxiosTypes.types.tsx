import { IUser } from "../Redux/actionProps.types";

export type IAxiosUserAll = {
  status: string;
  details: IUser[];
};


// Define a TypeScript export type named IAxiosUserAdd
export type IAxiosUserAdd = {
  // Define a property 'message' of type string
  message: string;
  // Define a property 'details' which can hold either an empty object '{}' or any object '{}'
  details: {} | object;
};
