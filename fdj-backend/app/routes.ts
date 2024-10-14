import { FastifyPluginAsync } from "fastify";
import {
  PlayerListRequestType,
  SearchRequestType,
  TeamsListRequestType,
} from "./types/request";
import {
  PlayersListSchema,
  SearchSchema,
  TeamsListSchema,
} from "./schemas/foot.schema";
import {
  getAll,
  getAllPlayersByTeam,
  getTeamsByLeague,
} from "./services/foot.service";
import validate from "uuid-validate";
import { isUndefined } from "lodash";

export const routes: FastifyPluginAsync = async (server) => {
  server.get(
    "/search/:query",
    {
      schema: SearchSchema,
    },
    async (req: SearchRequestType, reply) => {
      const { query } = req.params;
      const leagues = await getAll(query);
      return reply.send({ leagues });
    }
  );

  server.get(
    "/teams/:leagueId",
    {
      schema: TeamsListSchema,
    },
    async (req: TeamsListRequestType, reply) => {
      const { leagueId } = req.params;
      if (!validate(leagueId)) {
        return reply.code(400).send({ message: "invalid id" });
      }
      const teams = await getTeamsByLeague(leagueId);
      if (isUndefined(teams)) {
        return reply.code(404).send({ message: "league not found" });
      }
      return reply.send({ teams });
    }
  );

  server.get(
    "/players/:teamId",
    {
      schema: PlayersListSchema,
    },
    async (req: PlayerListRequestType, reply) => {
      const { teamId } = req.params;
      if (!validate(teamId)) {
        return reply.code(400).send({ message: "invalid id" });
      }
      const players = await getAllPlayersByTeam(teamId);
      if (isUndefined(players)) {
        return reply.code(404).send({ message: "team not found" });
      }
      return reply.send({ players });
    }
  );
};
