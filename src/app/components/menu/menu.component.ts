import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  public status!:number
  public marcas!:Array<string>;
  constructor(
    private _service:ServiceCubos
  ) {
    
  }
  ngOnInit(): void {
    this.loadMarcas()
    if(localStorage.getItem("token") && localStorage.getItem("token")!=""){
      console.log("hay token");
      this.status=1;
    }
    else{
      console.log("No hay token");
      this.status=0;
    }
  }
  loadMarcas():void{
    this._service.loadMarcas().subscribe(result=>{
      this.marcas=result;
      console.log("Marcas:");
      console.log(this.marcas);
    })
  }
  
  ngOnChange():void{
    alert("ngOnChnage")
  }
}
