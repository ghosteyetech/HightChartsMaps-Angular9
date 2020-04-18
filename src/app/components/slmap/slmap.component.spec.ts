import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlmapComponent } from './slmap.component';

describe('SlmapComponent', () => {
  let component: SlmapComponent;
  let fixture: ComponentFixture<SlmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
