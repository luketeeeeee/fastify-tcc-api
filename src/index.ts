import Fastify from "fastify";

const fastify = Fastify();

fastify.route({
  method: "GET",
  url: "/",
  handler: () => {
    return { hello: "world" };
  },
});

const startServer = async () => {
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
