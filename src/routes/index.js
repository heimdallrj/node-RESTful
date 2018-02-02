var express = require('express');
var router = express.Router();

// NOTE: This is some sample routes only.
// Should add routes and actions as needed.

router.get('/v1/ping', function(req, res) {
  res.status(200)
   .send({
      "status": {
        "code": 200,
        "message": "OK"
      },
      "data": req.query
    });
});

router.post('/v1/ping', function(req, res) {
  res.status(200)
   .send({
      "status": {
        "code": 200,
        "message": "OK"
      },
      "data": req.body
    });
});

router.put('/v1/ping', function(req, res) {
  res.status(200)
   .send({
      "status": {
        "code": 200,
        "message": "OK"
      },
      "data": req.body
    });
});

router.delete('/v1/ping', function(req, res) {
  res.status(200)
   .send({
      "status": {
        "code": 200,
        "message": "OK"
      },
      "data": req.body
    });
});

module.exports = router;