const Captcha = require('../utils/captcha/index');

const captchaObj = new Captcha(); // 生成 一个随机的图片

function createPassportRouter(app, router) {
  // 随时改变请求的参数, 来达到更换图片路径的目的
  router.get('/passport/image_code/:float', (req, res) => {
    const captcha = captchaObj.getCode();
    // captcha.text; // 文本资源
    // captcha.data; // 图片资源
    res.setHeader('Content-Type', 'image/svg+xml') // 记住大写
    res.send(captcha.data);
  })

  // router.get('/passport', (req, res) => {
  //   res.render('passport');
  // })

  return router
}


module.exports = createPassportRouter