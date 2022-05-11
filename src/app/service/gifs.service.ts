import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GIFApp, Gif } from '../components/gifs/interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private api_url: string ='https://api.giphy.com/v1/'
  private apiKey: string = 'hzAYubPpSs91sJYTKxl75lK4w9u2QbPt';

  get api(){
    return this.apiKey;
  }

  public resultados: Gif[]= []
  private _historial: string[] = []
  get historial(){
    return [... this._historial]
  }
  constructor(private http: HttpClient) { 
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []
    /* if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!)
    } */
  }

  
  buscarGifs(query: string = ''){
    query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial))
      
    }
    this.http.get<GIFApp>(`${this.api_url}stickers/search?api_key=${this.api}&q=${query}`).subscribe((res) => {
      console.log(res.data)
      this.resultados = res.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados))
    })
  }
}
