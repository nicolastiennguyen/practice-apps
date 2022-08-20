const models = require('../models/checkout.js');

module.exports = {
  post: (req, res) => {
    var params = [req.body.name, req.body.email, req.body.password, req.body.address1, req.body.address2, req.body.city, req.body.state, req.body.zip, req.body.phone, req.body.creditcard, req.body.expiry, req.body.cvv, req.body.billingzip]
    console.log(req.body)
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

