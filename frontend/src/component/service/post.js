import { post } from "../../Services/NetworkRequest";
import { common } from "../../Services/common";

export const getData = () => {
  return post(`${common.API.PLAN_LIST}`);
};
