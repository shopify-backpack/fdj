import { FastifySchema } from "fastify";

const ErrorResponse = {
  400: {
    description: "Error response",
    type: "object",
    properties: {
      message: { type: "string" },
    },
  },
  404: {
    description: "Not found",
  },
};

export const SearchSchema: FastifySchema = {
  description: "Search for league",
  summary: "API to search for league",
  params: {
    type: "object",
    properties: {
      query: {
        type: "string",
        description: "the name of league",
      },
    },
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        leagues: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              name: { type: "string" },
            },
          },
        },
      },
    },
    ...ErrorResponse,
  },
};

export const TeamsListSchema: FastifySchema = {
  description: "List of teams",
  summary: "API to show list of teams from league id",
  params: {
    type: "object",
    properties: {
      leagueId: {
        type: "string",
      },
    },
    required: ["leagueId"],
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        teams: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              name: { type: "string" },
              thumbnail: { type: "string" },
            },
          },
        },
      },
    },
    ...ErrorResponse,
  },
};

export const PlayersListSchema: FastifySchema = {
  description: "List of players",
  summary: "API to show list of players from team id",
  params: {
    type: "object",
    properties: {
      teamId: {
        type: "string",
      },
    },
    required: ["teamId"],
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        players: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              name: { type: "string" },
              position: { type: "string" },
              thumbnail: { type: "string" },
              signinAmount: { type: "number" },
              signinCurrency: { type: "string" },
            },
          },
        },
      },
    },
    ...ErrorResponse,
  },
};
