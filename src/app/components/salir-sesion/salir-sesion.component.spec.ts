import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalirSesionComponent } from './salir-sesion.component';

describe('SalirSesionComponent', () => {
  let component: SalirSesionComponent;
  let fixture: ComponentFixture<SalirSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalirSesionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalirSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
