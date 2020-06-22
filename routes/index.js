var express = require('express');
var router = express.Router();

const ctrl = require('../controllers/index');

/* GET home page. */
router.get('/', ctrl.index);

module.exports = router;
