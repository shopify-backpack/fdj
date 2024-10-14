import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject, debounceTime, distinct } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
})
export class AutocompleteComponent {
  @Input() inputValue = '';
  @Output() inputValueChange = new EventEmitter();

  searchValue = new BehaviorSubject('');

  onEditAutocomplete(value: any) {
    this.searchValue.next(value.currentTarget.value);
    this.searchValue.pipe(debounceTime(1000), distinct()).subscribe((value) => {
      this.inputValueChange.emit(value);
    });
  }
}
