import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradoSeccionComponent } from './grado-seccion.component';

describe('GradoSeccionComponent', () => {
  let component: GradoSeccionComponent;
  let fixture: ComponentFixture<GradoSeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradoSeccionComponent]
    });
    fixture = TestBed.createComponent(GradoSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
