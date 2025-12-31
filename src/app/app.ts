import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatComponente } from './Components/chat-componente/chat-componente';
import { MensajesComponente } from './Components/mensajes-componente/mensajes-componente';
import { NewChatComponente } from './Components/new-chat-componente/new-chat-componente';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ClonChatAngular');
}
