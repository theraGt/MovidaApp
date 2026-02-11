import { Router } from "express";
import { getVisitas } from '../controllers/visitasController.js'

const router = Router();

router.get('/visitas', getVisitas);

export default router;