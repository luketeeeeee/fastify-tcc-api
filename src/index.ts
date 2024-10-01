import Fastify from "fastify";
import { pingRoutes } from "./modules/ping/ping.routes";

const fastify = Fastify();

fastify.route({
  method: "GET",
  url: "/health-check",
  handler: () => {
    return { ok: true };
  },
});

const startServer = async () => {
  // this is how you register a route
  fastify.register(pingRoutes, { prefix: "api/users" });

  try {
    await fastify.listen({ port: 3000 });
    console.log(
      "\x1b[42m" + " SERVER STARTED " + "\x1b[0m" + " http://localhost:3000",
    );
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};
startServer();
