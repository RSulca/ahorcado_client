import { Component, OnInit } from '@angular/core';
import { WordsService } from '../../services/words.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.css']
})
export class JugarComponent implements OnInit {

  img: number;
  palabraActual: string;
  letrasIngresadas: string[];
  cadena: string[];
  iniciado: boolean;
  intento: number;
  cMalas: number;
  show: boolean;

  constructor(private _word: WordsService) {
    this.letrasIngresadas = [];
    this.palabraActual = "";
    this.cadena = [];
    this.iniciado = false;
    this.intento = 0;
    this.img = 0;
    this.cMalas = 0;
    this.show = false;
  }

  ngOnInit(): void {
  }

  jugar() {
    this._word.getWord().subscribe((res: any) => {
      this.palabraActual = res.data[Math.floor(Math.random() * res.data.length)].word;
      this.cadena = Array.from(this.palabraActual).fill("_");
      this.iniciado = true;
    })
  }

  perder(word) {
    Swal.fire(
      'Perdiste!',
      "Vuelve a intentarlo, la palabra correcta era " + word + "!",
      'error'
    )
    this.reset();
  }

  ganar(word) {
    Swal.fire(
      'Ganaste!',
      "Palabra correcta " + word + " !",
      'success'
    )
    this.reset();
  }

  revisar(letra: any) {
    letra.value = letra.value.toLowerCase();
    let palabraComparar = Array.from(this.palabraActual);
    if (letra.value === "" || this.letrasIngresadas.includes(letra.value)) {
      letra.value = "";
      return;
    }
    if (palabraComparar.includes(letra.value)) {
      palabraComparar.forEach((letraActual, i) => {
        if (letraActual === letra.value) {
          this.cadena[i] = letra.value
        }
      })
    } else {
      this.letrasIngresadas.push(letra.value.toLowerCase());
      this.img++;
      this.cMalas++;
    }
    letra.value = "";
    if (JSON.stringify(palabraComparar) === JSON.stringify(this.cadena)) {
      this.ganar(this.palabraActual);
    }
    if (this.cMalas === 10 || this.img === 10) {
      this.perder(this.palabraActual);
    }
  }

  reset() {
    this.letrasIngresadas = [];
    this.palabraActual = "";
    this.cadena = [];
    this.iniciado = false;
    this.intento = 0;
    this.img = 0;
    this.cMalas = 0;
    this.show = false;
  }

  mostrar() {
    this.show = !this.show;
  }

}
