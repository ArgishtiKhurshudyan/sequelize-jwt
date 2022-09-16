import express from "express";
import {createProduct, deleteProduct, getProducts, updateProduct} from "../controllers/product";
import { verifyToken} from "../verifyToken";
const router = express.Router();

router.post("/product",verifyToken, createProduct);
router.put("/:id",verifyToken, updateProduct);
router.delete("/:id",verifyToken, deleteProduct);
router.get("/product",verifyToken, getProducts);


export default router;
