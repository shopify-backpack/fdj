import { ILike } from "typeorm";
import { League, Player, Team } from "../../entities";
import { AppDataSource } from "../../libs/db";

const leagueRepository = AppDataSource.getRepository(League);
const teamRepository = AppDataSource.getRepository(Team);
const playerRepository = AppDataSource.getRepository(Player);

export const getAll = async (searchString: string) => {
  return leagueRepository.find({
    where: {
      name: ILike(`%${searchString}%`),
    },
  });
};

export const getTeamsByLeague = async (leagueId: string) => {
  const league = await leagueRepository.findOne({
    where: {
      id: leagueId,
    },
  });
  if (!league) {
    return;
  }
  return teamRepository.find({
    where: {
      league,
    },
  });
};

export const getAllPlayersByTeam = async (teamId: string) => {
  const team = await teamRepository.findOne({
    where: {
      id: teamId,
    },
  });
  if (!team) {
    return;
  }
  return playerRepository.find({
    where: {
      team,
    },
  });
};

