import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FdjService } from '../../services/fdj.service';
import { Player } from '../../interfaces/foot.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-player-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './player-page.component.html',
  styleUrl: './player-page.component.scss',
})
export class PlayerPageComponent implements OnInit {
  loading = false;
  players: Player[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly fdjService: FdjService
  ) {}

  ngOnInit(): void {
    const teamsId = this.route.snapshot.paramMap.get('teamsId');
    if (!teamsId) {
      this.router.navigate(['']);
      return;
    }
    this.loading = true;
    this.fdjService.getPlayers(teamsId).subscribe((res) => {
      this.loading = false;
      this.players = res.players;
    });
  }
}
