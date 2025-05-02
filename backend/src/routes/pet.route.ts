import { Hono } from "hono";
import * as petController from "../controllers/pet.controller.ts";

const petRouter = new Hono();

petRouter.post("/create", petController.createPet);

export { petRouter };