const express = require('express')
const qs = require('querystring')
const axios = require('axios')
const router = express.Router()
const {
  CLIENT_ID,
  CLIENT_SECRET,
  USERNAME,
  PASSWORD,
  RESOURCE,
} = require('../config')

// @route  GET api/powerbi
// @desc   Get fresh token powerbi
// @access PUBLIC
router.get('/', async (req, res) => {
  const data = {
    resource: RESOURCE,
    grant_type: 'password',
    client_secret: CLIENT_SECRET,
    client_id: CLIENT_ID,
    //username
    username: 'hoaiphong@0mk7g.onmicrosoft.com',
    password: PASSWORD,
  }
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    },
    data: qs.stringify(data),
    url: 'https://login.windows.net/common/oauth2/token',
  }

  await axios(options).then((value) => {
    res.send(value.data)
  })
})

module.exports = router
