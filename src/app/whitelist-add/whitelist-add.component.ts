import { Component, OnInit } from '@angular/core';
import { WhitelistService } from '../whitelist.service';
import { isValid } from './address';

function filter(address: String) {
  return address.trim();
}

@Component({
  selector: 'app-whitelist-add',
  templateUrl: './whitelist-add.component.html',
  styleUrls: ['./whitelist-add.component.css']
})
export class WhitelistAddComponent implements OnInit {
  address: String = '';

  constructor(private whitelist: WhitelistService) {
  }

  add() {
    this.whitelist.add(filter(this.address));
    this.address = '';
  }

  isValid(address) {
    return isValid(filter(address));
  }

  ngOnInit() {
  }
}
