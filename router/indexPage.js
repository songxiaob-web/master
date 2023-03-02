const sql = require('../db/orm-handler');
const info_category = sql.init('info_category');

function createIndexRouter(app, router) {

  router.get('/', (req, res) => {
    // (async () => {
    //   try {
    //     let result = await info_category('find');
    //     console.log('result',result)
    //     res.send(result);
    //   } catch (err) {
    //     res.send('index');
    //   }
    // })()
    res.render('index');
  })

  return router
}

module.exports = createIndexRouter