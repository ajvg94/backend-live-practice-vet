import { Router } from 'express';
import * as OwnerController from '../controllers/owner'
export const router = Router();

router.get("/api/owners/", OwnerController.getAll);
router.post("/api/owners/", OwnerController.create);
router.get("/api/owners/:id", OwnerController.getById);
router.put("/api/owners/:id", OwnerController.update);
router.delete("/api/owners/:id", OwnerController.destroy);