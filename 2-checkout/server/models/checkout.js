const db = require('../db.js')

module.exports = {
  post: (params, callback) => {
    var queryStr = 'INSERT INTO responses(name) values (?)'
    db.query(queryStr, params, (err, data) => {
      if (err) {
        console.log('post: models failing')
      } else {
        callback(null, data)
        console.log('post: models working')
      }
    })
  },

}