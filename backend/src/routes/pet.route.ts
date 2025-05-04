import { Hono } from "hono";
import * as petController from "../controllers/pet.controller.ts";

const petRouter = new Hono();

petRouter.post("/create", petController.createPet);
petRouter.patch("/edit", petController.editPet);
petRouter.get("/get", petController.getPet);
petRouter.get("/getAll", petController.getAllPet);
petRouter.delete("/delete", petController.deletePet);



export { petRouter };