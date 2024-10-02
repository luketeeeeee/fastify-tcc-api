import { FastifyInstance } from "fastify";

import { pingReportController } from "./controllers";

export const pingRoutes = async (server: FastifyInstance) => {
  server.post("/", pingReportController.create);
  server.get("/", pingReportController.findAll);
};
