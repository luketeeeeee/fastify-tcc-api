import { FastifyReply, FastifyRequest } from "fastify";
import { deletePingReportById } from "../ping.services";

export const remove = async (
  request: FastifyRequest<{ Params: { pingReportId: string } }>,
  reply: FastifyReply,
) => {
  const { pingReportId } = request.params;

  try {
    const deletedReport = await deletePingReportById(pingReportId);

    if (!deletedReport) {
      return reply.status(404).send({
        success: true,
        message: `ping report with id ${pingReportId} not found`,
      });
    }

    return reply.status(200).send({ success: true, data: deletedReport });
  } catch (error) {
    return reply.status(500).send({
      success: false,
      message: { error: (error as Error).message },
    });
  }
};
