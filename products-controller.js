const { validationResult } = require('express-validator');
const da = require('../data-access');
const Item = require('../models/product');

exports.index = function (req, res, next) {
    da.getAllItems().then((result) => {
        res.render('products/index', { title: 'Products View', items: result, message: "" });
    }, (eMsg) => {
        res.render('products/index', { title: 'Products View', items: null, message: eMsg });
    });
}

exports.details = function (req, res, next) {
    da.getItem(req.params.itemid).then((result) => {
        res.render('products/details', { title: 'Product Details View', item: result, message: "" });
    }, (eMsg) => {
        res.render('products/details', { title: 'Product Details View', item: null, message: eMsg });
    });
}


exports.create_get = function (req, res, next) {
    res.render('products/create', { title: 'Create Product View', item: null, message: "" });
}

exports.create_post = function (req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.render('products/create', { title: 'Create Product View', item: item, message: "Invalid Email" });
    }
    else {
        var iname = req.body.iname;
        var iprice = req.body.iprice;

        var item = new Item(iname, iprice);
        // console.log(user);

        da.insertItem(item).then((result) => {
            res.redirect('/products');
        }, (eMsg) => {
            res.render('products/create', { title: 'Create Product View', item: item, message: eMsg });
        });
    }
}

exports.edit_get = function (req, res, next) {
    da.getItem(req.params.userid).then((result) => {
        res.render('products/edit', { title: 'Edit Product View', item: result, message: "" });
    }, (eMsg) => {
        res.render('products/edit', { title: 'Edit Product View', item: null, message: eMsg });
    });
}

exports.edit_post = function (req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.render('products/edit', { title: 'Edit Product View', item: item, message: "Invalid Email" });
    }
    else {
        var iname = req.body.iname;
        var iprice = req.body.iprice;

        var item = new User(iname, iprice);

        da.updateItem(req.params.itemid, item).then((result) => {
            res.redirect('/items');
        }, (eMsg) => {
            res.render('products/edit', { title: 'Edit Product View', item: item, message: eMsg });
        });
    }
}

exports.delete_get = function (req, res, next) {
    da.getItem(req.params.itemid).then((result) => {
        res.render('products/delete', { title: 'Delete Product View', item: result, message: "" });
    }, (eMsg) => {
        res.render('products/delete', { title: 'Delete Product View', item: null, message: eMsg });
    });
}

exports.delete_post = function (req, res, next) {
    da.deleteItem(req.params.item).then((msg) => {
        res.redirect('/products');
    }, (eMsg) => {
        res.render('products/delete', { title: 'Delete Product View', item: null, message: eMsg });
    });
}