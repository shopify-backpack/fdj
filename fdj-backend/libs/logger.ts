import { FastifyRequest } from "fastify";

export const logger = (req: FastifyRequest) => {
  return req.log;
};
