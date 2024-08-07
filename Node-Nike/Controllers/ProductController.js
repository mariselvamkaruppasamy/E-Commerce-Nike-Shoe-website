const productData = require('../Models/ProductModel');
const multer = require('multer');
const path = require('path');



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const Uploads = multer({
  storage,
  limits: {
    fileSize: 30 * 1024 * 1024
  }
}).fields([
  {name: 'productImage', maxCount: 3},
  {name: 'productSubImages', maxCount: 3}
]);

module.exports.insertProduct = [
  Uploads,
  (req, res)=>{
    const product = new productData({
      productName: req.body.productName,
      productAmount: req.body.productAmount,
      productOldAmount: req.body.productOldAmount,
      productDiscount: req.body.productDiscount,
      productCatagory: req.body.productCatagory,
      productImage: req.files['productImage']? req.files['productImage'].map(file => file.path):[null],
      productSubImages: req.files['productSubImages']? req.files['productSubImages'].map(file => file.path):[null]
    },)

    product.save()
    .then((ele)=>{
      res.send(ele)
    })
    .catch((err)=>{
      res.send(err)
    })
  }
]


module.exports.productList = [
  (req, res)=>{
    productData.find()
    .then((listz)=>{
      res.send(listz)
    })
    .catch((err)=>{
      res.send(err)
    })
  }
]

module.exports.findProductById = [
  (req, res) => {
    const productId = req.params.id;

    productData.findById(productId, (err, product) => {
      if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      return res.status(200).json(product);
    });
  }
]

module.exports.findProductById = [
  async (req, res) => {
    try {
      const { id } = req.params;
      const product = await productData.findById(id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ error: 'Server error', details: err.message });
    }
  }
];