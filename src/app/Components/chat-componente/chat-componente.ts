import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ChatService } from '../../Service/chat-service';

@Component({
  selector: 'app-chat-componente',
  imports: [CommonModule],
  templateUrl: './chat-componente.html',
  styleUrl: './chat-componente.css',
})
export class ChatComponente {
  constructor(public chatService: ChatService, private router: Router) {}

  openChat(id: string) {
    this.router.navigate(['/chats', id]);
  }

  nuevoChat() {
    this.router.navigate(['/nuevo']);
  }
}
