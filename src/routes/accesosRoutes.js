import { Router } from "express";
import { LoginMovida } from '../controllers/accesosController.js'
import cors from 'cors'

const router = Router();

router.post('/loginMovida',cors(), LoginMovida);

export default router;