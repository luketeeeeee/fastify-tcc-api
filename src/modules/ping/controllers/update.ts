import { FastifyReply, FastifyRequest } from "fastify";
import { updatePingReport } from "../ping.services";

export const findAll = async (
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
    Params: { pingReportId: string }
  }>,
  reply: FastifyReply,
) => {
  try {
    const id = request.params.pingReportId
    const pingReportData = request.body

    const updatedPingReport = await updatePingReport(id, pingReportData)

    return reply.status(200).send({ data: updatedPingReport });
  } catch (error) {
    console.log(error);
    return reply.status(500).send({
      success: false,
      message: { error: (error as Error).message },
    });
  }
};
