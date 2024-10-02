import { FastifyReply, FastifyRequest } from "fastify";
import { findAllPingReports } from "../ping.services";

export const findAll = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const pingReports = await findAllPingReports();

    return reply.status(200).send({ data: pingReports });
  } catch (error) {
    console.log(error);
    return reply.status(500).send({
      success: false,
      message: { error: (error as Error).message },
    });
  }
};
