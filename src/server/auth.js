const request = require("./fsApi");
const config = require("../app/config");
const oauth = function (options) {
  return request({
    method: "post",
    url: "/oauth/token",
    headers: {
      common: {
        contentType: "application/x-www-form-urlencoded",
      },
    },
    data: {
      grant_type: "authorization_code",
      client_id: config.APP_ID,
      client_secret: config.APP_SECRET,
      redirect_uri: "http://127.0.0.1:5173/fslogin",
      ...options,
    },
  });
};

module.exports = { oauth };
