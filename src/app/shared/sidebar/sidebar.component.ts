import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/Services/gifs.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsServices: GifsService) { }

  get historial() {
    return this.gifsServices.historial
  }

  buscar(gif: string) {
    this.gifsServices.buscarGifs(gif)
  }
}