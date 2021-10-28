import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../Interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = 'JQW2igo4fVGDHS6BRoCSAomZSoc1o7yI'
  private _historial: string[] = []
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'
  public resultados: Gif[] = []


  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []
  }

  get historial() {
    return [...this._historial]
  }

  //Agrega al historial
  buscarGifs(query: string) {
    query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query)
      this._historial = this.historial.splice(0, 10)
      localStorage.setItem('historial', JSON.stringify(this._historial))

    }
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '12')
      .set('q', query)
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe((resp) => {
        this.resultados = resp.data
        localStorage.setItem('resultados', JSON.stringify(this.resultados))
      })

  }

}
