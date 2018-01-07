import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  @Input() entries: Array<Object>;

  constructor() { }

  ngOnInit() {
  }

}
