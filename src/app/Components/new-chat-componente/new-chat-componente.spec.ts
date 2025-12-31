import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChatComponente } from './new-chat-componente';

describe('NewChatComponente', () => {
  let component: NewChatComponente;
  let fixture: ComponentFixture<NewChatComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewChatComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewChatComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
