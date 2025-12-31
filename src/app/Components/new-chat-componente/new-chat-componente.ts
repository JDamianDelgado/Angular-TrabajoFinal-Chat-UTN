import { Component } from '@angular/core';
import { ChatService } from '../../Service/chat-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-chat-componente',
  imports: [CommonModule, FormsModule],
  templateUrl: './new-chat-componente.html',
  styleUrl: './new-chat-componente.css',
})
export class NewChatComponente {
  name = '';
  initial = '';

  constructor(private chatService: ChatService, private router: Router) {}

  create() {
    if (!this.name.trim()) {
      return;
    }
    const chat = this.chatService.newChat(this.name.trim());

    if (this.initial.trim()) {
      this.chatService.newMensaje(chat.id, this.initial.trim(), true);
    }

    this.router.navigate(['/chats', chat.id]);
  }

  cancel() {
    this.router.navigate(['/chats']);
  }
}
