import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { ActivatedRoute, Params } from '@angular/router';
import { Cubo } from '../../models/cubo';
import { ComentarioCubo } from '../../models/comentarioCubo';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent implements OnInit{

  public idCubo!:string;
  public comentarios!:Array<ComentarioCubo>
  public cubo!:Cubo;
  constructor(
    private _service:ServiceCubos,
    private _activeRoute:ActivatedRoute
  ) {
    
  }
  ngOnInit(): void {
    this.loadDetalles();
    
  }
  loadDetalles():void{
    this._activeRoute.params.subscribe((params:Params)=>{
       this.idCubo=params["id"];
      this._service.loadDetallesCubo(this.idCubo).subscribe(result=>{
        console.log(result);
        this.cubo=result;
        this.loadComentarios();
      })
    })
  }
  loadComentarios():void{
    this._service.loadComentarios(this.idCubo).subscribe(result=>{
      console.log("Comentarios");
      console.log(result);
      this.comentarios=result;
    })
  }

}
