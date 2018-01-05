import { Component } from '@angular/core';

import { ENTRIES } from '../fixtures/entries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimaBlock';
  entries = ENTRIES;
}
