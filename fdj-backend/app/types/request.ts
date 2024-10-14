import { FastifyRequest } from "fastify";

export type SearchRequestType = FastifyRequest<{
  Params: {
    query: string;
  };
}>;

export type TeamsListRequestType = FastifyRequest<{
  Params: {
    leagueId: string;
  };
}>;

export type PlayerListRequestType = FastifyRequest<{
  Params: {
    teamId: string;
  };
}>;
