
const router = require('express').Router();
const { getProductsController, createProductController } = require('../Controllers/ProductController');

router.get('/product/get', getProductsController);
router.post('/product/create', createProductController);

module.exports = router;
