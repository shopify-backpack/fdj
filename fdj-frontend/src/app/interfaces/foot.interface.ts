export interface League {
  id: string;
  name: string;
  sport: string;
  teams: Team[];
}

export interface Team {
  id: string;
  name: string;
  thumbnail: string;
  players: Player[];
  league: League;
}

export interface Player {
  id: string;
  name: string;
  position: string;
  thumbnail: string;
  signinAmount: number;
  signinCurrency: string;
  born: Date;
  team: Team;
}
