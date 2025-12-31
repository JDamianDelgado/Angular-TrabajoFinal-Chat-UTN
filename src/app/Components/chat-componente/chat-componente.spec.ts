import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponente } from './chat-componente';

describe('ChatComponente', () => {
  let component: ChatComponente;
  let fixture: ComponentFixture<ChatComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
