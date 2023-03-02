const createPassportRouter = require('./passport');
const createIndexRouter = require('./indexPage');


function initRoutes(app, router) {
  // 这个地方 可以写拦截器, 来阻拦后续的请求
  let passportRouter = createPassportRouter(app, router); // passport route
  let indexRouter = createIndexRouter(app, router); // Index route
  return [
    indexRouter,
    passportRouter
  ]
}

// function initRoutes(router) {
//   return (() => {
//     router.get('/', (req, res) => {
//       res.render('index');
//     })
//     return router
//   })()
// }

module.exports = initRoutes