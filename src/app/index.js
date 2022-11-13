const Koa = require('koa');
const Cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser');
const errorHandler = require('./error-handle');
const useRoutes = require('../router');

const app = new Koa();

app.useRoutes = useRoutes;
app.use(Cors())
app.use(bodyParser());
app.useRoutes();
app.on('error', errorHandler);

module.exports = app;