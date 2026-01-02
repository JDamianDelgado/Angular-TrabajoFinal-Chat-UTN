import { CommonModule } from '@angular/common';
import { Component, computed, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chat } from '../../../Interfaces/chat';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../Service/chat-service';
import { UltimaConexionPipe } from '../../Pipes/ultima-conexion-pipe';

@Component({
  selector: 'app-mensajes-componente',
  imports: [CommonModule, FormsModule, UltimaConexionPipe],
  templateUrl: './mensajes-componente.html',
  styleUrl: './mensajes-componente.css',
})
export class MensajesComponente {
  chatSignal!: Signal<Chat | undefined>;
  newText = '';
  private id?: string;

  constructor(private router: ActivatedRoute, private chatService: ChatService) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.id = params.get('id') ?? undefined;
      if (this.id) {
        this.chatSignal = this.chatService.getChatId(this.id);
      }
    });
  }

  send() {
    if (!this.id || !this.newText.trim()) {
      return;
    }
    this.chatService.newMensaje(this.id, this.newText.trim(), true);
    this.newText = '';
  }

  formatDate(date: string) {
    if (!date) {
      return '';
    }

    const datetime = new Date(date);
    return datetime.toLocaleString();
  }
}
