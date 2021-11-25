import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent   {

  termino:string = '';
  hayError: boolean = false;
  paises:Country[]=[];

  paisesSugeridos:Country[]=[];


  constructor(private paisService:PaisService) { }

  buscar( termino:string ) {
    this.hayError = false;
    this.termino = termino;

    this.paises = [];

    this.paisService.buscarPais(this.termino).subscribe
    (
      (resp) => {
        this.paises = resp;
      }
    );

  }


  sugerencias(termino : string) {
    console.log(termino);

    this.paisService.buscarPais(termino).subscribe(paises => {
      this.paisesSugeridos = paises.splice(0,3);
    },
    err => {
      this.paisesSugeridos = [];
    });

  }

}
