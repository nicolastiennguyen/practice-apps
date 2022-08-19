const models = require('../models/checkout.js');

module.exports = {
  post: (req, res) => {
    var params = [req.body.name]
    models.post(params, (err, data) => {
      if (err) {
        res.sendStatus(400);
        console.log('post: controllers failing')
      } else {
        res.sendStatus(200)
        console.log('post: controllers working')
      }
    })
  },

}

