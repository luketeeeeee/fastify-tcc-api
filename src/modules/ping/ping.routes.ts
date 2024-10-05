import { FastifyInstance } from "fastify";

import { pingReportController } from "./controllers";

export const pingRoutes = async (server: FastifyInstance) => {
  server.get("/", pingReportController.findAll);
  server.post("/", pingReportController.create);
  server.delete("/:id", pingReportController.remove)
};
