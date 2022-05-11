import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsComponent } from '../components/gifs/gifs.component';
import { ResultadosComponent } from '../components/gifs/resultados/resultados.component';
import { BusquedaComponent } from '../components/gifs/busqueda/busqueda.component';



@NgModule({
  declarations: [
    GifsComponent,
    BusquedaComponent,
    ResultadosComponent,],
  imports: [
    CommonModule,
    
  ],
  exports: [
    GifsComponent,
    BusquedaComponent,
    ResultadosComponent,
  ]
})
export class GifsModule { }
