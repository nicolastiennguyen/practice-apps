const models = require('../models/checkout.js');

module.exports = {
  post: (req, res) => {
    var params = [req.body.name]
    models.post(params, (err, data) => {
      if (err) {
        res.sendStatus(400);
        console.log('post: controller failing')
      } else {
        res.sendStatus(200)
        console.log('post: controller working')
      }
    })
  },

  get: (req, res) => {
    models.get((err, data) => {
      if (err) {
        res.sendStatus(400)
        console.log('get: controller failing')
      } else {
        res.send(data)
        console.log('get: controller working')
      }
    })
  }
}

