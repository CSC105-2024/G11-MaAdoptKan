import { Hono } from "hono";
import * as requestController from "../controllers/request.controller.ts";

const requestRouter = new Hono();

requestRouter.post("/create", requestController.createRequest);
requestRouter.get("/get", requestController.getRequest);
requestRouter.get("/getAll", requestController.getAllRequest);

export { requestRouter };