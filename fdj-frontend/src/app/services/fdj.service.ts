import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { League, Player, Team } from '../interfaces/foot.interface';

@Injectable({
  providedIn: 'root',
})
export class FdjService {
  constructor(private readonly http: HttpClient) {}

  getAutocomplete(query: string) {
    return this.http.get<{ leagues: League[] }>(`/search/${query}`);
  }

  getTeams(leagueId: string) {
    return this.http.get<{ teams: Team[] }>(`/teams/${leagueId}`);
  }

  getPlayers(teamId: string) {
    return this.http.get<{ players: Player[] }>(`/players/${teamId}`);
  }
}
