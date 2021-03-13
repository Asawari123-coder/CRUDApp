var express = require('express');
const { body, validationResult } = require('express-validator');

var router = express.Router();

const itemsCtrl = require('../controllers/products-controller');

router.get('/', itemsCtrl.index);

router.get('/details/:userid', itemsCtrl.details);

router.get('/create', itemsCtrl.create_get);

router.post('/create',  itemsCtrl.create_post);

router.get('/edit/:itemid', itemsCtrl.edit_get);

router.post('/edit/:itemid', itemsCtrl.edit_post);

router.get('/delete/:itemid', itemsCtrl.delete_get);

router.post('/delete/:itemid', itemsCtrl.delete_post);

module.exports = router;
