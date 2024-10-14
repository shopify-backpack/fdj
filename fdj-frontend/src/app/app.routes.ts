import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { LayoutComponent } from './layout/layout.component';
import { PlayerPageComponent } from './pages/player-page/player-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'teams/:leagueId',
        component: DetailsPageComponent,
      },
      {
        path: 'players/:teamsId',
        component: PlayerPageComponent,
      },
    ],
  },
];
