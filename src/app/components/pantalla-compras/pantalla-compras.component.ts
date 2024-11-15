import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import Compra from '../../models/compra';

@Component({
  selector: 'app-pantalla-compras',
  templateUrl: './pantalla-compras.component.html',
  styleUrl: './pantalla-compras.component.css'
})
export class PantallaComprasComponent implements OnInit {

  public compras!:Array<Compra>
  constructor(
    private _service:ServiceCubos
  ) {
    
  }

  ngOnInit(): void {
    this.mostrarCompras();
  }
  mostrarCompras():void{
    this._service.mostrarCompras().subscribe(response=>{
      this.compras=response;
    })
  }
}
