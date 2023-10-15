import fs from 'fs';
import multer from 'multer';
import {Router} from 'express';

import {
  createProduct,
  productDetails,
  updateProduct,
  uploadNewProductImage,
  updateProductDetails,
  listProducts,
  destroyProduct,
} from '../../../controllers';

// ----Upload Product Multer----//

const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const uniqueSuffix = Math.round(Math.random() * 1e9);
    cb(
        null,
        uniqueSuffix +
        `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`,
    );
  },
});

const upload = multer({storage});

//  Multer SetupEnd

const product = Router();

product.route('/').get(listProducts).post(createProduct);
product
    .route('/:id')
    .get(productDetails)
    .patch(updateProductDetails)
    .delete(destroyProduct);

product.route('/upload').post(upload.single('image'), uploadNewProductImage);

export default product;
