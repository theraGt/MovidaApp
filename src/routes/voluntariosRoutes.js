import { Router } from "express";
import { getVoluntarios } from '../controllers/voluntariosController.js'

const router = Router();

router.get('/voluntarios', getVoluntarios);

export default router;