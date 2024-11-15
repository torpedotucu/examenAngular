import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { Cubo } from '../../models/cubo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  public cubos!:Array<Cubo>;
  constructor(private _service:ServiceCubos) {
    
  }
   
  ngOnInit(): void {
    this.loadCubos();
  }

  loadCubos(){
    this._service.loadCubos().subscribe(result=>{
      console.log(result);
      this.cubos=result;
    })
  }

}
