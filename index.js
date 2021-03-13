var express = require('express');
var router = express.Router();

const homeCtrl = require('../controllers/home-controller');

router.get('/', homeCtrl.index);

module.exports = router;
