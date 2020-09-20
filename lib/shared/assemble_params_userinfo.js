const getParams = require('../helpers/params');

module.exports = function getAssembleParamsUserInfo(whitelist) {
  const Params = getParams(whitelist);

  return async function assembleParamsUserInfo(ctx, next) {
    const params = ctx.query;
    // eslint-disable-next-line no-console
    console.log('oidc userinfo query params: ', params);
    ctx.oidc.params = new Params(params);
    await next();
  };
};
