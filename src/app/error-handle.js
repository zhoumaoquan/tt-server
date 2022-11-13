const errorHandler = (error, ctx) => {
  let status, message;

  console.log(error.message);

  ctx.status = status;
  ctx.body = message;
};

module.exports = errorHandler;
