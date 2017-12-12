import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaalbumComponent } from './llistaalbum.component';

describe('LlistaalbumComponent', () => {
  let component: LlistaalbumComponent;
  let fixture: ComponentFixture<LlistaalbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlistaalbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
