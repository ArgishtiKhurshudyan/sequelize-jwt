import express from "express";
import {createProduct, deleteProduct, getProduct, getProducts, updateProduct} from "../controllers/product";
import { verifyToken} from "../verifyToken";
const router = express.Router();

router.post("/product",verifyToken, createProduct);
router.put("/:productId",verifyToken, updateProduct);
router.delete("/:productId",verifyToken, deleteProduct);
router.get("/:productId",verifyToken, getProduct);
router.get("/",verifyToken, getProducts);


export default router;
