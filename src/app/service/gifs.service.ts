import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'xCTMDRW5z17DrHnjgLJafNZykz6Hqjdu';

  constructor(private http: HttpClient) { }

  private _historial: string[] = []
  get historial(){
    return [... this._historial]
  }
  
  buscarGifs(query: string = ''){
    query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
    }
    this.http.get('https://api.giphy.com/v1/stickers/search?api_key=hzAYubPpSs91sJYTKxl75lK4w9u2QbPt&q=one piece').subscribe((res: any) => {
      console.log(res.data)
    })
  }
}
