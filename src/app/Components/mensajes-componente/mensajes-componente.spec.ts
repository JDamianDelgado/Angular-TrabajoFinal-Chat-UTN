import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesComponente } from './mensajes-componente';

describe('MensajesComponente', () => {
  let component: MensajesComponente;
  let fixture: ComponentFixture<MensajesComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajesComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajesComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
