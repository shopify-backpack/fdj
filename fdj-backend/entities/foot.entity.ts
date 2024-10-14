import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";

@Entity()
export class League {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  sport: string;

  @OneToMany(() => Team, (team) => team.league)
  teams: Team[];
}

@Entity()
export class Team {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  thumbnail: string;

  @OneToMany(() => Player, (player) => player.team)
  players: Player[];

  @ManyToOne(() => League, (league) => league.teams)
  league: League;
}

@Entity()
export class Player {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  position: string;

  @Column()
  thumbnail: string;

  @Column("decimal", { precision: 10, scale: 2 })
  signinAmount: number;

  @Column()
  signinCurrency: string;

  @Column({ type: "date" })
  born: Date;

  @ManyToOne(() => Team, (team) => team.players)
  team: Team;
}
