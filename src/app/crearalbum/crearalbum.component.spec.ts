import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearalbumComponent } from './crearalbum.component';

describe('CrearalbumComponent', () => {
  let component: CrearalbumComponent;
  let fixture: ComponentFixture<CrearalbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearalbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
