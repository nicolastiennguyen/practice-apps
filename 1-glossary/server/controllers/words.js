const models = require('../models/words.js')

module.exports = {
  post: (req, res) => {
    // console.log(req.body)
    models.post(req.body, (err) => {
      if (err) {
        res.sendStatus(400)
        console.log('controller not working')
      } else {
        res.sendStatus(200)
        console.log('controller is working')
      }
    })
  },

}