import { Hono } from "hono";
import * as vaccineController from "../controllers/vaccine.controller.ts";

const vaccineRouter = new Hono();

vaccineRouter.post("/create/:petId", vaccineController.createVaccine);

export { vaccineRouter };