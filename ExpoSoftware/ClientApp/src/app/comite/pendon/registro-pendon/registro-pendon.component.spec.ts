import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPendonComponent } from './registro-pendon.component';

describe('RegistroPendonComponent', () => {
  let component: RegistroPendonComponent;
  let fixture: ComponentFixture<RegistroPendonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroPendonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPendonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
