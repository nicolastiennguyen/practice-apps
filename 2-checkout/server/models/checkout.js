const db = require('../db.js')

module.exports = {
  post: (params, callback) => {
    let queryStr = 'INSERT INTO responses(name) values (?)'
    db.query(queryStr, params, (err, data) => {
      if (err) {
        console.log('post: models failing')
      } else {
        callback(null, data)
        console.log('post: models working')
      }
    })
  },

  get: (callback) => {
    let queryStr = "SELECT * FROM responses";
    db.query(queryStr, (err, data) => {
      if (err) {
        console.log('get: model failing');
      } else {
        callback(null, data);
        console.log('get: model working');
      }
    })
  }
}