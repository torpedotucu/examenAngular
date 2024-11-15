import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { SalirSesionComponent } from './components/salir-sesion/salir-sesion.component';
import { MarcaCuboComponent } from './components/marca-cubo/marca-cubo.component';
import { PantallaUserComponent } from './components/pantalla-user/pantalla-user.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { PantallaComprasComponent } from './components/pantalla-compras/pantalla-compras.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },{
    path:"detalles/:id",component:DetallesComponent
  },
  {
    path:"inicioSesion",component:IniciarSesionComponent
  },
  {
    path:"cerrarSesion",component:SalirSesionComponent
  },
  {
    path:"marca/:marca",component:MarcaCuboComponent
  },
  {
    path:"pantallauser",component:PantallaUserComponent
  },
  {
    path:"comprar",component:ComprarComponent
  },{
    path:"pantallaCompras",component:PantallaComprasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
