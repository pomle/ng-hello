import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitelistAddComponent } from './whitelist-add.component';

describe('WhitelistAddComponent', () => {
  let component: WhitelistAddComponent;
  let fixture: ComponentFixture<WhitelistAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhitelistAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitelistAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
