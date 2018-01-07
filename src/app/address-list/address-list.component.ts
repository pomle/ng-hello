import { Component, OnInit, Input } from '@angular/core';
import { WhitelistService } from '../whitelist.service';
import { Entry } from '../entry';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  flag: String = 'default';

  @Input() entries: Entry[];

  constructor(private whitelist: WhitelistService) {
  }

  getPending() {
    const pending = new Set(this.whitelist.addresses);
    for (const entry of this.entries) {
      pending.delete(entry.address);
    }
    return pending;
  }

  getEntries() {
    const sorted = [...this.entries];

    if (this.flag === 'address') {
      return sorted.sort((a, b) => a.address > b.address ? 1 : -1);
    } else if (this.flag === 'balance') {
      return sorted.sort((a, b) => a.balance > b.balance ? -1 : 1);
    } else if (this.flag === 'whitelist-first') {
      if (this.whitelist.size === 0) {
        this.flag = 'default';
        return sorted;
      }
      return sorted.sort(a => this.whitelist.has(a.address) ? -1 : 1);
    }

    return sorted;
  }

  hasWhitelist() {
    return this.whitelist.addresses.size > 0;
  }

  sort(flag: String) {
    this.flag = flag;
  }

  ngOnInit() {
  }
}
