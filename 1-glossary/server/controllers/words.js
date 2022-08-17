const models = require('../models/words.js')

module.exports = {
  post: (req, res) => {
    models.post(req.body, (err) => {
      if (err) {
        console.log('post controller not working')
        res.sendStatus(400)
      } else {
        console.log('post controller is working')
        res.sendStatus(200)
      }
    })
  },

  get: (req, res) => {
    models.get((err, data) => {
      if (err) {
        console.log('get controller is not working')
        res.sendStatus(400);
      } else {
        console.log('get controller is working')
        res.send(data);
      }
    })
  }
}