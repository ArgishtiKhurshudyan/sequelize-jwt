import {Router} from "express";
import {createColor, updateColor, deleteColor, getColors} from '../controllers/color';
import {verifyToken} from "../verifyToken";

const router = Router()

router.post("/", verifyToken, createColor)
router.put("/:id", verifyToken, updateColor)
router.delete("/:id", verifyToken, deleteColor)
router.get("/:id", verifyToken, getColors)

export default router;