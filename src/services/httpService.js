import axios from "axios";
import { COMPANY } from "../pref";

const instance = axios.create({
  baseURL: `http://localhost:5000/api/`,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeoutErrorMessage:
    "Le serveur met trop de temps à répondre, réessayez plus tard.",
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  let adminInfo;
  if (localStorage.getItem(COMPANY)) {
    adminInfo = JSON.parse(localStorage.getItem(COMPANY));
  }

  // console.log(adminInfo?.data?.data?.accessToken)

  return {
    ...config,
    headers: {
      authorization: adminInfo ? `Bearer ${adminInfo?.data?.token}` : null,
    },
  };
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    console.log("error.response.status ", error.response.status);

    if (
      parseInt(error.response.status) === 401 ||
      parseInt(error.response.status) === 403
    ) {
      console.log("try logout");
      localStorage.removeItem(COMPANY);
      window.location.replace(`/`);
    }
    return Promise.reject(error);
  }
);

const responseBody = (response) => response;

const requests = {
  get: (url, body, headers) =>
    instance.get(url, body, headers).then(responseBody),

  post: (url, body) => instance.post(url, body).then(responseBody),

  put: (url, body, headers) =>
    instance.put(url, body, headers).then(responseBody),

  patch: (url, body) => instance.patch(url, body).then(responseBody),

  delete: (url, body) => instance.delete(url, body).then(responseBody),
};

export default requests;
