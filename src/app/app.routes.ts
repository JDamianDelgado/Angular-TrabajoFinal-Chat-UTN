import { Routes } from '@angular/router';
import { ChatComponente } from './Components/chat-componente/chat-componente';
import { MensajesComponente } from './Components/mensajes-componente/mensajes-componente';
import { NewChatComponente } from './Components/new-chat-componente/new-chat-componente';
import { LayoutComponente } from './Components/layout-componente/layout-componente';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponente,
    children: [
      { path: 'chats/:id', component: MensajesComponente },
      {
        path: '',
        redirectTo: 'chats',
        pathMatch: 'full',
      },
      {
        path: 'nuevo',
        component: NewChatComponente,
      },
    ],
  },
  {
    path: '**',
    component: LayoutComponente,
  },
];
