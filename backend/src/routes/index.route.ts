import { Hono } from "hono";
import { userRouter } from "./user.route.ts";
import { petRouter } from "./pet.route.ts";
import { requestRouter } from "./request.route.ts";

const mainRouter = new Hono();

mainRouter.route("/user", userRouter);
mainRouter.route("/pet", petRouter);
mainRouter.route("/request", requestRouter);


export { mainRouter };