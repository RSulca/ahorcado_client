import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'show'
})
export class ShowPipe implements PipeTransform {

  transform(value: string, condicion: boolean): string {
    let cadena = "";
    if (!condicion) {
      Array.from(value).forEach(letra => {
        cadena = cadena + "*";
      })
    } else {
      cadena = value;
    }
    return cadena;
  }

}
