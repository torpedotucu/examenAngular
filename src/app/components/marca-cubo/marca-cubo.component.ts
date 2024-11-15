import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { Cubo } from '../../models/cubo';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-marca-cubo',
  templateUrl: './marca-cubo.component.html',
  styleUrl: './marca-cubo.component.css'
})
export class MarcaCuboComponent implements OnInit {

  public marca!: string;
  public cubos!: Array<Cubo>;
  constructor(
    private _service: ServiceCubos,
    private _activeRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.marca = params["marca"];
      this.loadCubosMarca()
    })
  }
  loadCubosMarca(): void {
    this._service.loadCubosMarca(this.marca).subscribe(result => {
      console.log("entro")
      this.cubos = result;
      console.log(result)
    })

  }
}
