import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { Cubo } from '../../models/cubo';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrl: './comprar.component.css'
})
export class ComprarComponent implements OnInit{

  @ViewChild("cuboSelect") cuboSelect!:ElementRef;
  public arrayCubos!:Array<Cubo>;
  public selectedCubo!:string;
  constructor(
    private _service:ServiceCubos
  ) {
    
  }

  ngOnInit(): void {
    this.loadCubos();
  }
  loadCubos():void{
    this._service.loadCubos().subscribe(result=>{
      this.arrayCubos=result;
    })
  }
  comprar():void{
    let valor=this.cuboSelect.nativeElement.value;
    console.log(valor);
    this._service.comprarCubo(valor).subscribe(result=>{
      console.log(result);
      
    })
  }
}
