import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceCubos } from './services/service.cubos';
import { DetallesComponent } from './components/detalles/detalles.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { SalirSesionComponent } from './components/salir-sesion/salir-sesion.component';
import { MarcaCuboComponent } from './components/marca-cubo/marca-cubo.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { PantallaUserComponent } from './components/pantalla-user/pantalla-user.component';
import { PantallaComprasComponent } from './components/pantalla-compras/pantalla-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DetallesComponent,
    IniciarSesionComponent,
    SalirSesionComponent,
    MarcaCuboComponent,
    ComprarComponent,
    PantallaUserComponent,
    PantallaComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient(),ServiceCubos],
  bootstrap: [AppComponent]
})
export class AppModule { }
