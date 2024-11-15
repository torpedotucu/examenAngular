import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaCuboComponent } from './marca-cubo.component';

describe('MarcaCuboComponent', () => {
  let component: MarcaCuboComponent;
  let fixture: ComponentFixture<MarcaCuboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarcaCuboComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaCuboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
