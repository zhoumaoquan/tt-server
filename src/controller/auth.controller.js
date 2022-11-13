const jwt = require("jsonwebtoken");
const response = require('../app/response')
const { oauth } = require("../server/auth");

class AuthController {
  async qcodeAuth(ctx, next) {
    const { code } = ctx.request.body;

    // if (code) {
    //   try {
    //     const res = await oauth({ code });

    //     console.log(res, 'res');
    //   } catch (error) {
    //     console.log(error, 'error');
    //   }
    // }

    ctx.body = response(200, { code });
  }
}

module.exports = new AuthController();
