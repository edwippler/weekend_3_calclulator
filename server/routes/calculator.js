var express = require('express');
var router = express.Router();
var math = require('./mathfunctions.js'); //route for executing math functions
var result = {}; //set as empty object to pass back result


router.post('/addition', function(req, res) {
  var addedNumber = req.body;
  result.value = math.add(addedNumber.array[0], addedNumber.array[1]);
  res.send(result);
});

router.post('/subtraction', function(req, res) {
  var subtractNumber = req.body;
  result.value = math.subtract(subtractNumber.array[0], subtractNumber.array[1]);
  res.send(result);
});

router.post('/multiply', function(req, res) {
  var multiplyNumber = req.body;
  result.value = math.multiply(multiplyNumber.array[0], multiplyNumber.array[1]);
  res.send(result);
});

router.post('/divide', function(req, res) {
  var divideNumber =  req.body;
  result.value = math.divide(divideNumber.array[0], divideNumber.array[1]);
  res.send(result);
});

// router.get('/', function(req, res){// an uneccesary request due to no GET
//   res.send(result);
// });

module.exports = router;
