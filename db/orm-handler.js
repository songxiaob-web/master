const orm = require('./index')

// 初始化 需要调用 orm 

// init =>  初始化时候哪几个 数据表

function init(tableName) {
  let table = orm.model(tableName);

  return async function (useTableMethodName, n1, n2) {
    let result = await new Promise((resolve, reject) => {
      if (!n1) {
        table[useTableMethodName]((err, data) => {
          if (err) {
            reject(err);
            return
          }
          resolve(data)
        })
        return
      }

      if (!n2) {
        table[useTableMethodName](n1, (err, data) => {
          if (err) {
            reject(err);
            return
          }

          resolve(data)
        })
        return
      }

      table[useTableMethodName](n1, n2, (err, data) => {
        if (err) {
          reject(err);
          return
        }

        resolve(data)
      })
    })

    return result
  }
}


module.exports = {
  init
}