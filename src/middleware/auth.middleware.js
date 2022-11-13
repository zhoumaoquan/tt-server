const { oauth } = require('../server/auth')

const verifyQcode = async (ctx, next) => {
  const { code } = ctx.user;
  
};

module.exports = {
  verifyQcode,
};
