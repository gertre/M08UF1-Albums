import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallalbumComponent } from './detallalbum.component';

describe('DetallalbumComponent', () => {
  let component: DetallalbumComponent;
  let fixture: ComponentFixture<DetallalbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallalbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
