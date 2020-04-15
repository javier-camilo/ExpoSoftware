import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteConsultaComponent } from './docente-consulta.component';

describe('DocenteConsultaComponent', () => {
  let component: DocenteConsultaComponent;
  let fixture: ComponentFixture<DocenteConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocenteConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
