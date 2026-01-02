import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ChatService } from '../../Service/chat-service';
import { FormsModule, NgModel } from '@angular/forms';
import { Chat } from '../../../Interfaces/chat';

@Component({
  selector: 'app-chat-componente',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-componente.html',
  styleUrl: './chat-componente.css',
  standalone: true,
})
export class ChatComponente {
  constructor(public chatService: ChatService, private router: Router) {}
  name = '';
  chatFiltrados: Chat[] = [];

  findChat(): void {
    this.chatFiltrados = this.chatService.findName(this.name);

    if (this.chatFiltrados.length === 0) {
      alert('No se encontró chat');
    }
  }

  cancelarBusqueda(): void {
    this.name = '';
    this.chatFiltrados = [];
  }
  openChat(id: string) {
    this.router.navigate(['/chats', id]);
  }

  nuevoChat() {
    this.router.navigate(['/nuevo']);
  }
}
