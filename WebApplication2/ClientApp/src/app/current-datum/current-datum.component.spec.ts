import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDatumComponent } from './current-datum.component';

describe('CurrentDatumComponent', () => {
  let component: CurrentDatumComponent;
  let fixture: ComponentFixture<CurrentDatumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentDatumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentDatumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
