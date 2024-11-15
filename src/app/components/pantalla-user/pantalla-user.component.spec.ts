import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaUserComponent } from './pantalla-user.component';

describe('PantallaUserComponent', () => {
  let component: PantallaUserComponent;
  let fixture: ComponentFixture<PantallaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PantallaUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
