import { FastifyReply, FastifyRequest } from "fastify";
import { createPingReport } from "../ping.services";

export const create = async (
  request: FastifyRequest<{
    Body: {
      ipAddress: string;
      packetsTransmitted: number;
      packetsReceived: number;
      packetLoss: number;
      time: number;
      rttMin: number;
      rttAvg: number;
      rttMax: number;
      rttMDev: number;
    };
  }>,
  reply: FastifyReply,
) => {
  try {
    const pingReportData = request.body;

    const newPingReport = await createPingReport(pingReportData);

    return reply.status(201).send({
      success: true,
      data: newPingReport,
    });
  } catch (error) {
    console.error("Erro ao criar o PingReport:", error);

    return reply.status(500).send({
      success: false,
      message: { error: (error as Error).message },
    });
  }
};
