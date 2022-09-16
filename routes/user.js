import { Router } from "express";
import {deleteUser, updateUser} from '../controllers/user';
const router = Router()
import {verifyToken} from "../verifyToken";
router.put("/:id", verifyToken, updateUser)
router.delete("/:id",verifyToken, deleteUser)

export default router;