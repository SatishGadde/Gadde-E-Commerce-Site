import express from "express"
//import {protect , admin} from '../middleware/authMiddleware.js'
import {getProducts,getProductById} from '../controllers/productController.js'

const router = express.Router();

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router 