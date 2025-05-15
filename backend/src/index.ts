import { serve } from "@hono/node-server";
import { PrismaClient } from "./generated/prisma/index.js";
import { Hono } from "hono";
import { mainRouter } from "./routes/index.route.ts";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono();
export const db = new PrismaClient();

app.use(cors({
  // CORS will only allow requests coming from this origin.
  origin: ['http://localhost:5173'], 
  credentials: true,
}));

app.use('*', serveStatic({ root: './files' }));

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);

db.$connect()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error: any) => {
    console.error("Error connecting to the database:", error);
  });

app.route("", mainRouter);
