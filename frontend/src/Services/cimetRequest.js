import axios from "axios";
import { apiPathUrl } from "./configure";

export class CimetRequest {
  constructor() {
    this.http = axios.create({
      baseURL: apiPathUrl,
      headers: {
        "api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
        "Auth-Token": this.token ? this.token : null,
      },
    });

    this.http.interceptors.response.use(function (response) {
      return [response.data, response.status];
    });
    for (const method of ["get", "post", "delete"]) {
      this[method] = this.http[method];
    }
  }
}