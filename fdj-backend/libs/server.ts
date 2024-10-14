import fastify from "fastify";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";

const server = fastify({
  logger: true,
});

server.register(cors, {
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  origin: ["http://localhost:4200", "http://localhost:4000"],
});

server.register(swagger, {
  swagger: {
    info: {
      title: "FDJ Foot API",
      version: "1.0.0",
    },
    consumes: ["application/json"],
    produces: ["application/json"],
  },
});

server.register(swaggerUi, {
  theme: {
    title: "Foot FDJ Docs",
  },
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: "full",
    deepLinking: true,
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  transformSpecification: (swaggerObject) => {
    return swaggerObject;
  },
  transformSpecificationClone: true,
});

server.ready();

export { server };
