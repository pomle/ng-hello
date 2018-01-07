import { Component } from '@angular/core';
import { Entry } from './entry';
import { ENTRIES } from '../fixtures/entries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimaBlock';

  entries: Entry[]

  constructor() {
    this.entries = ENTRIES;
    console.log(this.entries);
  }
}
