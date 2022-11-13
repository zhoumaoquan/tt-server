function response(code, res, msg) {
  return {
    code,
    data: res,
    message: msg || "success",
  };
}

module.exports = response;
