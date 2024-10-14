import { DataSource } from "typeorm";
import { League, Player, Team } from "../entities";
import path from "path";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "ep-shy-math-a56nwunh.us-east-2.aws.neon.tech",
  port: 5432,
  username: "neondb_owner",
  password: "2oBSYNbMx6QK",
  database: "neondb",
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
  logging: true,
  entities: [League, Player, Team],
  migrations: [path.join(__dirname, "../migrations/*.{ts,js}")],
  subscribers: [],
});
