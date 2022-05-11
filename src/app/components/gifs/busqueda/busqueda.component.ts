import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/service/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor( private gifService: GifsService ) { }

  ngOnInit(): void {
  }

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    if(valor.trim().length === 0){
      return;
    }
    this.gifService.buscarGifs(valor)
    // console.log(valor)
    this.txtBuscar.nativeElement.value = ''
  }

}
