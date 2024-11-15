import { Component, OnInit, viewChild } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { Usuario } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-user',
  templateUrl: './pantalla-user.component.html',
  styleUrl: './pantalla-user.component.css'
})
export class PantallaUserComponent  implements OnInit{

  public user!:Usuario;
  constructor(
    private _service:ServiceCubos,
    private _router:Router
  ) {
    
  }
  ngOnInit(): void {
    this.loadPerfilUser();
  }

  loadPerfilUser(){
    this._service.loadInfoUser().subscribe(result=>{
      console.log(result);
      this.user=result;
    })
  }
  comprar():void{
    
  }
  
}
