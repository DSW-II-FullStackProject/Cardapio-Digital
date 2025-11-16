import { Router } from "express";
import { generateMenu } from "../controllers/aiController";
import { auth } from "../middleware/auth";

const router = Router();

router.get("/gerar-cardapio", auth, generateMenu);

export default router;
