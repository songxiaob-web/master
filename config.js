const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const path = require('path');
const express = require('express');
const initRoutes = require('./router/index');

class GlobalConfig {
  constructor(app, port) {
    this.app = app;
    this.port = port;
    this.initConfig();
    this.initRouter();
  }

  initConfig() {
    const app = this.app;
    app.use(cookieSession({
      name: 'test',
      keys: ['7223365846135985632145631548963'],
      maxAge: 86400 * 2
    }));

    app.use(cookieParser());

    app.use(express.static('public'))
    /** 
     * 获取 get post 请求携带参数的方法
     */
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json()) // 数据打为JSON格式

    /**
     * 调用 art-template语法
     */
    // 1、修改模板引擎为html，导入express-art-template
    // 2、设置运行的模式为生产模式
    // production 生产模式，线上模式
    // development 开发模式
    // 3、设置模板存放目录为views文件夹
    // 4、设置引擎后缀为html
    app.engine('html', require('express-art-template'));
    app.set('view options', {
      debug: process.env.NODE_ENV !== 'production'
    });
    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'html');
  }

  initRouter() {
    const routerList = initRoutes(app, express.Router());
    routerList.forEach(item => {
      this.app.use(item)
    })
  }
}

module.exports = GlobalConfig // 可以将 函数 当做模块导出


