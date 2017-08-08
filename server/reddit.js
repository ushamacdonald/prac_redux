const express = require('express')
const request = require('superagent')
const bodyParser = require('body-parser')

const router = express.Router()

router.use(bodyParser.json())

router.get('/subreddit/:subreddit', (req, res) => {
  request
    .get(`http://www.reddit.com/r/${req.params.subreddit}.json`)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else if (result.body.data.children.length == 0) {
        res.status(404).send({message:'Subreddit does not exist'})
      } else {
        res.json(result.body.data.children)
      }
    })
})

module.exports = router
