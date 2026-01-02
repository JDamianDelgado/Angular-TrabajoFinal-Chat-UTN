import { Pipe, PipeTransform } from '@angular/core';
import { Mensaje } from '../../Interfaces/mensaje';

@Pipe({
  name: 'ultimaConexion',
})
export class UltimaConexionPipe implements PipeTransform {
  transform(listaMensajes: Mensaje[]): string {
    if (!listaMensajes || listaMensajes.length === 0) {
      return '';
    }
    const recibidos = listaMensajes.filter((msj) => msj.fromMe === false);

    if (recibidos.length === 0) {
      return '';
    }
    const ultimaConexion = recibidos.at(-1)?.date ?? '';

    const lastDate = new Date(ultimaConexion);
    const now = new Date();

    const diferencia = now.getTime() - lastDate.getTime();

    const difMinutos = Math.floor(diferencia / (1000 * 60));
    const difHora = Math.floor(diferencia / (1000 * 60 * 60));
    const difDias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    if (difMinutos < 1) {
      return 'recien';
    }

    if (difMinutos < 60) {
      return `hace ${difMinutos} min`;
    }

    if (difHora < 24) {
      return `hace ${difHora} hs`;
    }

    if (difDias === 1) {
      return `hace 1 dia`;
    }
    return `hace ${difDias} dias`;
  }
}
