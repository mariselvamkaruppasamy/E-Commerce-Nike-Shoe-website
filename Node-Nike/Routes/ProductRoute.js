const express = require("express")
const router = express.Router()
const productRoute = require('../Controllers/ProductController')

router.post('/product/productinsert',productRoute.insertProduct)
router.get('/product/productlistz', productRoute.productList)
router.get('/product/productlistz/:id', productRoute.findProductById)

module.exports = router