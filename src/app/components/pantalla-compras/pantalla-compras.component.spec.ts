import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaComprasComponent } from './pantalla-compras.component';

describe('PantallaComprasComponent', () => {
  let component: PantallaComprasComponent;
  let fixture: ComponentFixture<PantallaComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PantallaComprasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
