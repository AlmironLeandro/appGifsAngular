import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../Services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {



  //Manipulacion de los elementos html con viewChild
  // Con #txtBuscar creas una referencia del elemento html para luego manipularlo
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsServices: GifsService) { }
  buscar() {
    const valor = this.txtBuscar.nativeElement.value
    this.gifsServices.buscarGifs(valor)
    this.txtBuscar.nativeElement.value = ''

  }

}
