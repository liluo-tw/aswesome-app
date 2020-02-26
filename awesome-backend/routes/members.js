var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");
global.Headers = fetch.Headers;
global.base64 = {
  encode: function (str) {
    return Buffer.from(str).toString('base64');
  },
};
global.gzip = {
  zip: function (str) {
    return zlib.gzipSync(Buffer.from(str));
  },
}

const ON_PREM_SERVER_ENDPOINT = "https://reqres.in/api"

/* GET member by id. */
router.get('/:memberId', function (req, res, next) {
  clientId = 'user'
  clientKey = 'passwd'

  fetch(`${ON_PREM_SERVER_ENDPOINT}/users/2`, {
    headers: new Headers({
      "Authorization": `Basic ${base64.encode(`${clientId}:${clientKey}`)}`
    }),
  })
    .then(response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(resp => {
      console.log('success', resp.data)
      res.status(200).send({
        ...resp.data,
        id: req.params.memberId,
      });
    })
    .then(err => {
      console.log('error', err)
      res.status(500).send(err);
    })

});

module.exports = router;
