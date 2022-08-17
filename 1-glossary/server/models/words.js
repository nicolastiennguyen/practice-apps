var db = require('../db.js')

module.exports = {
  post: (data, callback) => {
    db.save(data, (err) => {
      if (err) {
        console.log('model is not working')
        callback(err);
      } else {
        callback(null);
        console.log('model is working: data inserted into database')
      }
    })
  }
}