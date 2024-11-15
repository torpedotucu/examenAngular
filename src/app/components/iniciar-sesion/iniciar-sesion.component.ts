import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { Router } from '@angular/router';
import { LoginModel } from '../../models/loginModel';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent  implements OnInit{

  @ViewChild("cajaEmail") cajaEmail!:ElementRef;
  @ViewChild("cajapswd") cajapswd!:ElementRef;

  public menu!:MenuComponent;

  public statuts!:boolean;
  constructor(
    private _service:ServiceCubos,
    private _router:Router
  ) {
    
  }

  ngOnInit(): void {
    //validar si tiene token, si lo tiene mandar directamente a la pantalla de comprar
    const token=localStorage.getItem("token")
    if(token){
      console.log("Token encontrado")
      this._router.navigate(['/pantallauser']);
    }else{
      
    }
  }
  
  iniciarSesion():void{
    let email=this.cajaEmail.nativeElement.value;
    let password=this.cajapswd.nativeElement.value;
    let loginModel=new LoginModel(email,password);
    console.log(loginModel);
    this._service.iniciarSesion(loginModel).subscribe(result=>{
      console.log(result);
      localStorage.setItem("token", result.response);
      console.log(localStorage.getItem("token"));
      
      this._router.navigate(["/pantallauser"]);
      
    })
  }
  hayToken():void{
    //if(localStorage())
  }


}
