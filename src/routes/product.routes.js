import { Router } from 'express';
import ProductController from '../controllers/products.controller.js';

const router = Router();

// -- Todos los productos
router.get('/', ProductController.getAllProducts); 

// -- Producto por ID
router.get('/:id', ProductController.getProductByID);

// -- Agregando nuevo producto
router.post('/', ProductController.addProduct);

// -- Editando info del producto
router.put('/:id', ProductController.editProduct);

// -- Eliminar producto
router.delete('/:id', ProductController.deleteProduct);

export default router;