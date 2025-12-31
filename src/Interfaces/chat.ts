import { Mensaje } from './mensaje';

export interface Chat {
  id: string;
  name: string;
  image: string;
  ultimoMensaje?: string;
  listaMensajes: Mensaje[];
}
