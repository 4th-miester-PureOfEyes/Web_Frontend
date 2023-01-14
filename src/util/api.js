import axios from "axios";

const api = axios.create({
  baseURL: `https://port-0-server-3vw25lc9t3b00.gksl2.cloudtype.app`,
  timeout: 3000,
});

api.interceptors.request.use(
  function (config) {
    // 로그인 되있을 때 access_token
    const accessToken = localStorage.getItem("Authorization");
    console.log(accessToken);
    if (accessToken) {
      config.headers = {
        Authorization: "Bearer " + accessToken,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;