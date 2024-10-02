
const router = require('express').Router();
const { getProductsController, createProductController } = require('../Controllers/ProductController');

router.get('/', getProductsController);
router.post('/create', createProductController);

module.exports = router;
