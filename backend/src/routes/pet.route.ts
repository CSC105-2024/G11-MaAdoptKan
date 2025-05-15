import { Hono } from "hono";
import * as petController from "../controllers/pet.controller.ts";
import { authMiddleware } from "../middleswares/authMiddleware.ts";

const petRouter = new Hono();

petRouter.post("/create", authMiddleware, petController.createPet);
petRouter.patch("/edit", petController.editPet);
petRouter.get("/get", petController.getPet);
petRouter.get("/getAll", petController.getAllPet);
petRouter.delete("/delete", petController.deletePet);
petRouter.get("/requests", petController.getAllRequestFromPet);

export { petRouter };
