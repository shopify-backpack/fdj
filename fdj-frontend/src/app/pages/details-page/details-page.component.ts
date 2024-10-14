import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FdjService } from '../../services/fdj.service';
import { Team } from '../../interfaces/foot.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss',
})
export class DetailsPageComponent implements OnInit {
  loading = false;

  teams: Team[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly fdjService: FdjService
  ) {}

  ngOnInit(): void {
    const leagueId = this.route.snapshot.paramMap.get('leagueId');
    if (!leagueId) {
      this.router.navigate(['']);
      return;
    }
    this.fdjService.getTeams(leagueId).subscribe((res) => {
      this.loading = false;
      this.teams = res.teams;
    });
  }

  onSelectTeams(teamId: string) {
    this.router.navigate(["players", teamId])
  }
}
