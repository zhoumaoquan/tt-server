const Router = require("koa-router");

const authRouter = new Router();

const { qcodeAuth } = require("../controller/auth.controller");

authRouter.post("/api/qcode_auth", qcodeAuth);
module.exports = authRouter;
