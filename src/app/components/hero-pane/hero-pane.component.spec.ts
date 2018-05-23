import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPaneComponent } from './hero-pane.component';

describe('HeroPaneComponent', () => {
  let component: HeroPaneComponent;
  let fixture: ComponentFixture<HeroPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
