import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatComponente } from '../chat-componente/chat-componente';

@Component({
  selector: 'app-layout-componente',
  imports: [RouterOutlet, ChatComponente],
  templateUrl: './layout-componente.html',
  styleUrl: './layout-componente.css',
  standalone: true,
})
export class LayoutComponente {}
