import { AppDataSource } from "./libs/db";
import { server } from "./libs/server";
import { routes } from "./app/routes";

server.register(routes);

AppDataSource.initialize().then(() => {
  server.listen({ port: 8080, host: "0.0.0.0" }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
});
