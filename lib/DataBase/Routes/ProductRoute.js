
const router = require('express').Router();
const { getProductsController, createProductController } = require('../Controllers/ProductController');
const apiLimiter = require('../Middleware/ApiLimiter');

router.get('/product/get',apiLimiter ,getProductsController);
router.post('/product/create', apiLimiter,createProductController);

module.exports = router;
