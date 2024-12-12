import express from "express"
import authController from "../controllers/authController.js";

const router = express.Router();

router.get("/",(req,res)=>res.json({message:"Auth route working correctly!!"}))
router.get("/login",authController.Login)
router.get("/register",authController.Register)
router.get("/forgotPass",authController.ForgotPass)

export default router;