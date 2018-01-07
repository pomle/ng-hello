import { Component, OnInit, Input } from '@angular/core';
import { WhitelistService } from '../whitelist.service';
import { Entry } from '../entry';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  @Input() entries: Entry[];

  constructor(private whitelist: WhitelistService) {
  }

  getAwaited() {
    const awaited = new Set(this.whitelist.addresses);
    for (const entry of this.entries) {
      awaited.delete(entry.address);
    }
    return awaited;
  }

  ngOnInit() {
    this.whitelist.add('0x47c62777fa377e52b275832c01297433a26f83b0');
  }
}
