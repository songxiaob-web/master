const express = require('express');
const app = express();
const GlobalConfig = require('./config');
const appGlobalConfig = new GlobalConfig(app, 8000);

app.listen(appGlobalConfig.port, () => {
  console.log(`服务端 ${appGlobalConfig.port}端口 开启`);
})