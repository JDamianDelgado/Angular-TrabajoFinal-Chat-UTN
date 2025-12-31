import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponente } from './layout-componente';

describe('LayoutComponente', () => {
  let component: LayoutComponente;
  let fixture: ComponentFixture<LayoutComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
