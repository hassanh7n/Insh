const {
    getAllProducts,
    getSingleProduct,
    updateProduct,
    createProduct,
    deletProduct
} = require('../controllers/ProductControllers');

const express = require('express');
const router = express.Router()

router.route('/').post( createProduct);
router.route('/').get(getAllProducts);
router.route('/:id').get( getSingleProduct);
router.route('/:id').patch( updateProduct);
router.route('/:id').delete( deletProduct);



module.exports = router;