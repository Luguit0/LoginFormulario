import { Router } from 'express';
import CartController from '../controllers/cart.controller.js';

const router = Router();


router.post('/', CartController.createCart);


router.get('/:id', CartController.getCartById);


router.put('/:id', CartController.addProductToCart);


router.put('/:id/product/:pid', CartController.addProductQuantityToCart);


router.delete('/:id/product/:pid', CartController.deleteProductFromCart);


router.delete('/:id', CartController.deleteAllProductsFromCart);

export default router;