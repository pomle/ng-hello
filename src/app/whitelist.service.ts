import { Injectable } from '@angular/core';

@Injectable()
export class WhitelistService {
  addresses: Set<String> = new Set();

  add(address: String) {
    this.addresses.add(address);
  }

  has(address: String) {
    return this.addresses.has(address);
  }

  remove(address: String) {
    this.addresses.delete(address);
  }

  get size() {
    return this.addresses.size;
  }
}
