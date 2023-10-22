import { Router } from 'express';
import * as DogController from '../controllers/dog'
export const router = Router();

router.get("/api/dogs/", DogController.getAll);
router.post("/api/dogs/", DogController.create);
router.get("/api/dogs/:id", DogController.getById);
router.put("/api/dogs/:id", DogController.update);
router.delete("/api/dogs/:id", DogController.destroy);

router.get("/api/owners/:id/dogs", DogController.getDogsByOwnerId);