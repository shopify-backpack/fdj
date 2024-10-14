/* eslint-disable @typescript-eslint/no-explicit-any */
import { Like } from "typeorm";
import { getAll, getTeamsByLeague, getAllPlayersByTeam } from "../services/foot.service";
import { League, Player, Team } from "../../entities";
import { AppDataSource } from "../../libs/db";

jest.mock("../../libs/db", () => ({
  AppDataSource: {
    getRepository: jest.fn().mockReturnThis(),
    find: jest.fn(),
    findOne: jest.fn(),
  },
}));

describe("League Service Tests", () => {
  const mockLeagues: League[] = [
    {
      id: "1",
      name: "Premier League",
      sport: "",
      teams: [],
    },
  ];
  const mockTeams: Team[] = [
    {
      id: "1",
      name: "Team A",
      league: mockLeagues[0],
      thumbnail: "",
      players: [],
    },
  ];
  const mockPlayers: Player[] = [
    {
      id: "1",
      name: "Player A",
      team: mockTeams[0],
      position: "",
      thumbnail: "",
      signinAmount: 0,
      signinCurrency: "",
      born: new Date(),
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getAll", () => {
    it("should return leagues based on search string", async () => {
      (AppDataSource.getRepository(League).find as any).mockResolvedValue(mockLeagues);

      const result = await getAll("Premier");
      expect(AppDataSource.getRepository(League).find).toHaveBeenCalledWith({
        where: {
          name: Like(`%Premier%`),
        },
      });
      expect(result).toEqual(mockLeagues);
    });

    it("should return an empty array if no leagues found", async () => {
      (AppDataSource.getRepository(League).find as any).mockResolvedValue([]);

      const result = await getAll("Unknown");
      expect(result).toEqual([]);
    });
  });

  describe("getTeamsByLeague", () => {
    it("should return teams by league ID", async () => {
      (AppDataSource.getRepository(League).findOne as any).mockResolvedValue(
        mockLeagues[0]
      );
      (AppDataSource.getRepository(Team).find as any).mockResolvedValue(mockTeams);

      const result = await getTeamsByLeague("1");
      expect(AppDataSource.getRepository(League).findOne).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(AppDataSource.getRepository(Team).find).toHaveBeenCalledWith({
        where: { league: mockLeagues[0] },
      });
      expect(result).toEqual(mockTeams);
    });

    it("should return undefined if league is not found", async () => {
      (AppDataSource.getRepository(League).findOne as any).mockResolvedValue(null);

      const result = await getTeamsByLeague("unknown");
      expect(result).toBeUndefined();
    });
  });

  describe("getAllPlayersByTeam", () => {
    it("should return players by team ID", async () => {
      (AppDataSource.getRepository(Team).findOne as any).mockResolvedValue(mockTeams[0]);
      (AppDataSource.getRepository(Player).find as any).mockResolvedValue(mockPlayers);

      const result = await getAllPlayersByTeam("1");
      expect(AppDataSource.getRepository(Team).findOne).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(AppDataSource.getRepository(Player).find).toHaveBeenCalledWith({
        where: { team: mockTeams[0] },
      });
      expect(result).toEqual(mockPlayers);
    });

    it("should return undefined if team is not found", async () => {
      (AppDataSource.getRepository(Team).findOne as any).mockResolvedValue(null);

      const result = await getAllPlayersByTeam("unknown");
      expect(result).toBeUndefined();
    });
  });
});
