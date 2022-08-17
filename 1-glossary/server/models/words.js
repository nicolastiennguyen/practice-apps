var db = require('../db.js')

module.exports = {
  post: (data, callback) => {
    db.save(data, (err) => {
      if (err) {
        console.log('model is not working')
        callback(err);
      } else {
        console.log('model is working: data inserted into database')
        callback(null);
      }
    })
  },

  get: (callback) => {
    db.get((err, data) => {
      if (err) {
        console.log('get model is not working')
        callback(err)
      } else {
        console.log('get model is working: data retrieved from database')
        callback(null, data)
      }
    })
  }
}