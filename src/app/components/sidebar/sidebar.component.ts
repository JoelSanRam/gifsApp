import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private gifService: GifsService ) { }

  ngOnInit(): void {
  }

  HistorialT:string[] = []
  get historial(){
    this.HistorialT = this.gifService.historial
    return this.HistorialT
  }

  Buscar(item:string){
    console.log(item)
    this.gifService.buscarGifs(item)
  }

}
