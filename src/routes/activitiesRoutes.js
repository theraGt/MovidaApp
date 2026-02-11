import { Router } from "express";
import { getActivities } from '../controllers/activitiesController.js'

const router = Router();

router.get('/activities', getActivities);

export default router;