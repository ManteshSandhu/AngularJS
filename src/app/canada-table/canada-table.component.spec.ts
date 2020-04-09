import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadaTableComponent } from './canada-table.component';

describe('CanadaTableComponent', () => {
  let component: CanadaTableComponent;
  let fixture: ComponentFixture<CanadaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanadaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanadaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
