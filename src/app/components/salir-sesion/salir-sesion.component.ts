import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salir-sesion',
  templateUrl: './salir-sesion.component.html',
  styleUrl: './salir-sesion.component.css'
})
export class SalirSesionComponent implements OnInit{

  constructor(
    private _router:Router
  ) {
    
  }

  ngOnInit(): void {
    if(localStorage.getItem("token") && localStorage.getItem("token")!=""){
      alert("HAY TOKEN");
      localStorage.setItem("token","");
      localStorage.clear()
      this._router.navigate(['/'])
    }else{
      alert("Sesion Cerrada");
      this._router.navigate(['/']);
      localStorage.clear()
      
    }
  }

}
