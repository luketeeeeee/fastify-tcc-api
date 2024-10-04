import { Prisma } from "@prisma/client";
import prisma from "../../utils/prisma";

export const findAllPingReports = () => {
  return prisma.ping_reports.findMany({});
};

export const createPingReport = (data: Prisma.ping_reportsCreateInput) => {
  return prisma.ping_reports.create({ data });
};

export const updatePingReport = (
  id: string,
  data: Prisma.ping_reportsUpdateInput,
) => {
  return prisma.ping_reports.update({ where: { id }, data });
};

export const deletePingReport = (id: string) => {
  return prisma.ping_reports.delete({ where: { id } });
};
