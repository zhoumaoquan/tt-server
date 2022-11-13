const axios = require("axios");

const instance = axios.create({
  baseURL: "https://passport.feishu.cn/suite/passport",
  timeout: 60000,
});

instance.interceptors.response.use(
  function (response) {
    console.log('response', response);
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

module.exports = instance;
