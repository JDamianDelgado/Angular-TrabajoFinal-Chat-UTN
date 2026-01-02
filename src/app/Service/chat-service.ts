import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Chat } from '../../Interfaces/chat';
import { Mensaje } from '../../Interfaces/mensaje';
import { CHATS_MOCK } from '../Mock/ContactosMock';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private _chats: WritableSignal<Chat[]> = signal(this.ordenMensajes(this.createMook()));

  private ultimoMensaje(chat: Chat): number {
    if (!chat.listaMensajes.length) return 0;

    const lastMessage = chat.listaMensajes.at(-1);
    return new Date(lastMessage!.date).getTime();
  }
  private ordenMensajes(chats: Chat[]): Chat[] {
    return chats.sort((a, b) => this.ultimoMensaje(b) - this.ultimoMensaje(a));
  }

  constructor() {}

  public readonly chats: Signal<Chat[]> = this._chats;

  private createMook(): Chat[] {
    return CHATS_MOCK;
  }

  getAllChat(): Chat[] {
    return this._chats();
  }

  getChatId(id: string): Signal<Chat | undefined> {
    return computed(() => {
      return this._chats().find((chat) => chat.id === id);
    });
  }

  newChat(name: string): Chat {
    const newChat: Chat = {
      id: Date.now().toString(),
      image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Date.now().toString()}`,
      name: name,
      ultimoMensaje: '',
      listaMensajes: [],
    };
    this._chats.update((chat) => {
      return [...chat, newChat];
    });
    return newChat;
  }

  newMensaje(chatId: string, texto: string, fromMe = true): Mensaje | undefined {
    const newMensaje: Mensaje = {
      id: Date.now().toString(),
      texto: texto,
      fromMe: fromMe,
      date: new Date().toISOString(),
    };

    this._chats.update((chatActuales) => {
      return chatActuales.map((chat) => {
        if (chat.id !== chatId) {
          return chat;
        }
        const updateMensajes = [...chat.listaMensajes, newMensaje];
        return {
          ...chat,
          listaMensajes: updateMensajes,
          ultimoMensaje: texto,
        };
      });
    });

    return newMensaje;
  }

  findName(name: string): Chat[] {
    if (!name.trim()) {
      return this._chats();
    }
    return this._chats().filter((chat) =>
      chat.name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(name.toLowerCase())
    );
  }
}
