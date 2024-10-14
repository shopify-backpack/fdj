import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
} from 'primeng/autocomplete';
import { FdjService } from '../../services/fdj.service';
import { League } from '../../interfaces/foot.interface';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AutoCompleteModule, FormsModule, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  inputValue = '';

  suggestions: League[] = [];

  constructor(
    private readonly fdjService: FdjService,
    private readonly router: Router
  ) {}

  onInputChange(value: AutoCompleteCompleteEvent) {
    this.fdjService.getAutocomplete(value.query).subscribe((res) => {
      this.suggestions = res.leagues;
    });
  }

  onSelectLeague(value: League) {
    this.router.navigate(['teams', value.id]);
  }
}
